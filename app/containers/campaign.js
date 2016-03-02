import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImageGallery from 'react-image-gallery';
import $ from 'jquery';

import {
  fetchCampaignById,
  resetDetails,
  resetSave,
  saveCampaign,
} from '../actions/campaign';
import { fetchCategories } from '../actions/category';
import { fetchIntervals } from '../actions/interval';

import Input from '../components/input/input';
import Select from '../components/input/select';
import Label from '../components/input/label';
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
    if (nextProps.campaignSave.isSaved) {
      this.props.history.push('home');
      return;
    }

    if (nextProps.campaignDetail.item) {
      this.setState({
        campaign: {
          ...nextProps.campaignDetail.item,
        },
      });
    }
  }

  componentDidUpdate () {
    $('select').material_select();
    $('label').addClass('active');
  }

  componentWillUnmount () {
    const { dispatch } = this.props;
    dispatch(resetSave());
    dispatch(resetDetails());
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

  //  handleSlide (index) { }

  handleCancel () {
    this.props.history.push('home');
  }

  handleSave () {
    const {
      dispatch,
      params,
      campaignDetail,
      campaignSave,
      categoryList,
      intervalList,
    } = this.props;

    if (campaignDetail.isFetching) return;
    if (campaignSave.isSaving) return;
    if (categoryList.isFetching) return;
    if (intervalList.isFetching) return;

    const { campaign } = this.state;

    delete campaign.id;

    // TODO: check validations
    dispatch(saveCampaign(campaign, params.id));
  }

  renderCampaign (isFetchingFromBackEnd) {
    const { campaign } = this.state;
    const { campaignDetail, campaignSave, categoryList, intervalList } = this.props;

    if (isFetchingFromBackEnd) {
      return null;
    }

    const images = [
      {
        original: 'http://lorempixel.com/1000/600/nature/1/',
        thumbnail: 'http://lorempixel.com/250/150/nature/1/',
        originalClass: 'featured-slide',
        thumbnailClass: 'featured-thumb',
        description: 'Optional description...',
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/2/',
        thumbnail: 'http://lorempixel.com/250/150/nature/2/',
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/3/',
        thumbnail: 'http://lorempixel.com/250/150/nature/3/',
      },
    ];

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
          <form className="col s12">
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
            <div className="section">
              <h5>Slides</h5>
            </div>
            <div className="divider"></div>
            <div className="row thumbs-container">
              <ImageGallery
                items={images}
                autoPlay={true}
                slideInterval={4000}
                //  onSlide={this.handleSlide.bind(this)}
              />
            </div>
            <div className="row actions">
              <div className="col s4">
                <a className="waves-effect waves-light blue btn-large right" onClick={::this.handleCancel}>{Strings.Operations.Cancel}</a>
              </div>
              <div className="col s4">
                <a className="waves-effect waves-light blue btn-large" onClick={::this.handleSave}>{Strings.Operations.Save}</a>
              </div>
              <div className="col s4">
                <a className="waves-effect waves-light red btn-large left">{Strings.Operations.Delete}</a>
              </div>
            </div>
            <div className="row">
              {campaignSave.error && this.renderSaveErrorMessage()}
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
        {this.renderCampaign(isFetchingFromBackEnd)}
      </div>
    );
  }
}

export default connect((state) => {
  return {
    campaignDetail: state.campaignDetail,
    campaignSave: state.campaignSave,
    categoryList: state.categoryList,
    intervalList: state.intervalList,
  };
})(Campaign);
