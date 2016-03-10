import React, { Component } from 'react';
import { connect } from 'react-redux';
import $ from 'jquery';

import {
  deleteCampaign,
  fetchCampaignById,
  resetDelete,
  resetDetails,
  resetSave,
  saveCampaign,
} from '../actions/campaign';
import { fetchCategories } from '../actions/category';
import { deleteImage, uploadImage, resetImages } from '../actions/image';
import { fetchIntervals } from '../actions/interval';

import ImageUpload from '../components/image-upload';
import Input from '../components/input/input';
import Label from '../components/input/label';
import Select from '../components/input/select';
import Switch from '../components/input/switch';

import { Strings } from '../constants';


class Campaign extends Component {

  constructor (props) {
    super(props);

    this.state = {
      campaign: {
        title: '',
        active: false,
        description: '',
        category: '',
        image: [],
      },
    };
  }

  componentWillMount () {
    const { dispatch, params } = this.props;

    if (params.id) {
      dispatch(fetchCampaignById(params.id));
    }

    dispatch(fetchCategories());
    dispatch(fetchIntervals());
  }

  componentWillReceiveProps (nextProps) {
    const {
      campaignDelete,
      campaignDetail,
      campaignSave,
      imageDelete,
      imageUpload,
    } = nextProps;

    if (campaignDelete.isDeleted || campaignSave.isSaved) {
      this.props.history.push('home');
      return;
    }

    let campaign = null;

    if (campaignDetail.item) {
      campaign = { ...campaignDetail.item };
    }

    if (imageUpload.hasUploadedImage || imageDelete.hasDeletedImage) {
      let image = [];

      if (campaign) {
        image = [...campaign.image];
      }
      image = [...image].concat(imageUpload.images);

      campaign = {
        ...this.state.campaign,
        ...campaign,
        image,
      };
    }

    if (campaign) {
      this.setState({ campaign });
    }
  }

  componentDidUpdate () {
    $('select').material_select();
    $('label').addClass('active');
  }

  componentWillUnmount () {
    const { dispatch } = this.props;
    dispatch(resetDelete());
    dispatch(resetDetails());
    dispatch(resetSave());
    dispatch(resetImages());
  }

  handleFieldChange (field) {
    this.updateStateValue(field, this.refs[field].value);
  }

  handleSelectChange (field, value, valueObj) {
    this.updateStateValue(field, valueObj.label);
  }

  updateStateValue (field, value) {
    this.setState({
      campaign: {
        ...this.state.campaign,
        [field]: value,
      },
    });
  }

  handleCancel () {
    this.props.history.push('home');
  }

  handleSave () {
    const {
      dispatch,
      params,
      campaignDelete,
      campaignDetail,
      campaignSave,
      categoryList,
      imageDelete,
      imageUpload,
      intervalList,
    } = this.props;

    if (campaignDelete.isDeleting) return;
    if (campaignDetail.isFetching) return;
    if (campaignSave.isSaving) return;
    if (categoryList.isFetching) return;
    if (imageDelete.isDeleting) return;
    if (imageUpload.isUploading) return;
    if (intervalList.isFetching) return;

    const campaign = {
      ...this.state.campaign,
      image: this.state.campaign.image.map(image => {
        return {
          path: image.path_lower || image.path,
        };
      }),
    };

    delete campaign.id;

    // TODO: check validations
    dispatch(saveCampaign(campaign, params.id));
  }

  handleDelete () {
    const {
      dispatch,
      params,
      campaignDelete,
      campaignDetail,
      campaignSave,
      categoryList,
      intervalList,
    } = this.props;

    if (!params.id) return;
    if (campaignDelete.isDeleting) return;
    if (campaignDetail.isFetching) return;
    if (campaignSave.isSaving) return;
    if (categoryList.isFetching) return;
    if (intervalList.isFetching) return;
    if (!confirm('Deseja realmente excluir esta campanha?')) return;

    dispatch(deleteCampaign(params.id));
  }

  handleDropImage (files) {
    const { imageUpload } = this.props;

    if (imageUpload.isUploading) {
      return;
    }

    const [image] = files;

    this.props.dispatch(uploadImage(image));
  }

  handleRemoveImage (path) {
    if (!confirm('Deseja realmente excluir esta imagem?')) return;

    this.props.dispatch(deleteImage(path));
  }

  renderCampaign () {
    const { campaign } = this.state;
    const {
      campaignDelete,
      campaignDetail,
      campaignSave,
      categoryList,
      imageUpload,
      intervalList,
      params,
    } = this.props;
    const errors = {};

    return (
      <div>
        <div className="row">
          {campaignDetail.error && this.renderDetailErrorMessage()}
        </div>
        <div className="row section">
          <div className="input-field col s12">
              <h5>{Strings.Campaign.FormTitle}</h5>
          </div>
        </div>
        <div className="row section">
          <div className="input-field col s10">
            <Switch
              ref="active"
              field="active"
              valueOn="Ativa"
              valueOff="Desativada"
              checked={campaign.active}
              onChange={this.updateStateValue.bind(this, 'active')}
            />
          </div>
        </div>
        <div className="row section">
          <form className="col s12" encType="multipart/form-data">
            <div className="row">
              <div className="input-field col s12">
                <input
                  id="name"
                  ref="title"
                  type="text"
                  className="validate"
                  defaultValue={campaign.title}
                  onChange={this.handleFieldChange.bind(this, 'title')}
                />
                <label htmlFor="name">{Strings.Campaign.FormFields.Title}</label>
              </div>
            </div>
            <div className="row section">
              <div className="input-field col s12">
                <textarea
                  id="description"
                  ref="description"
                  className="materialize-textarea"
                  defaultValue={campaign.description}
                  onChange={this.handleFieldChange.bind(this, 'description')}
                >
                </textarea>
                <label htmlFor="description">{Strings.Campaign.FormFields.Description}</label>
              </div>
            </div>
            <div className="row section">
              <Input>
                <Label cssClass="label-react-select" text={Strings.Campaign.FormFields.Interval.Label} />
                <Select
                  ref="interval"
                  field="interval"
                  placeholder={Strings.Campaign.FormFields.Interval.Placeholder}
                  options={intervalList.items}
                  value={campaign.interval}
                  onChange={::this.handleSelectChange.bind(this, 'interval')}
                />
              </Input>
            </div>
            <div className="row section">
              <Input>
                <Label cssClass="label-react-select" text={Strings.Campaign.FormFields.Category.Label} />
                <Select
                  ref="category"
                  field="category"
                  placeholder={Strings.Campaign.FormFields.Category.Placeholder}
                  options={categoryList.items}
                  value={campaign.category}
                  onChange={::this.handleSelectChange.bind(this, 'category')}
                />
              </Input>
            </div>
            <div className="row section">
              <ImageUpload
                images={campaign.image}
                isUploading={imageUpload.isUploading}
                onDropImage={::this.handleDropImage}
                onRemoveImage={::this.handleRemoveImage}
                errors={errors}
              />
            </div>
            <div className="row actions">
              <div className="col s4">
                <a className="waves-effect waves-light blue btn-large right" onClick={::this.handleCancel}>{Strings.Operations.Cancel}</a>
              </div>
              <div className="col s4">
                <a className="waves-effect waves-light blue btn-large" onClick={::this.handleSave}>{Strings.Operations.Save}</a>
              </div>
              {params.id && <div className="col s4">
                <a className="waves-effect waves-light red btn-large left" onClick={::this.handleDelete}>{Strings.Operations.Delete}</a>
              </div>}
            </div>
            <div className="row">
              {campaignSave.error && this.renderSaveErrorMessage()}
              {campaignDelete.error && this.renderDeleteErrorMessage()}
            </div>
          </form>
        </div>
      </div>
    );
  }

  renderDetailErrorMessage () {
    setTimeout(() => {
      this.props.history.push('home');
    }, 3 * 1000);

    return (
      <div>
        Campanha não encontrada. Estamos redirecionando para a listagem de campanhas...
      </div>
    );
  }

  renderDeleteErrorMessage () {
    return (
      <div>
        Ocorreu um erro ao tentar excluir esta campanha. Por favor tente novamente.
      </div>
    );
  }

  renderSaveErrorMessage () {
    return (
      <div>
        Erro ao salvar campanha. Por favor tente novamente.
      </div>
    );
  }

  render () {
    const { campaignDetail, categoryList, intervalList } = this.props;
    const isFetchingFromBackEnd = campaignDetail.isFetching ||
      categoryList.isFetching ||
      intervalList.isFetching;

    const divStyle = {
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '50px',
      padding: '20px',
    };

    return (
      <div className="app-page page-campaign white" style={divStyle}>
        {isFetchingFromBackEnd && <div> {Strings.Campaign.Loading}</div>}
        {!isFetchingFromBackEnd && this.renderCampaign()}
      </div>
    );
  }
}

export default connect((state) => {
  return {
    campaignDelete: state.campaignDelete,
    campaignDetail: state.campaignDetail,
    campaignSave: state.campaignSave,
    categoryList: state.categoryList,
    imageDelete: state.imageDelete,
    imageUpload: state.imageUpload,
    intervalList: state.intervalList,
  };
})(Campaign);
