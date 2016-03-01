import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImageGallery from 'react-image-gallery';
import $ from 'jquery';

import { fetchCampaignById } from '../actions/campaign';
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
        interval: '00:00',
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
    this.setState({
      campaign: {
        ...nextProps.campaign.item,
      },
    });
  }

  componentDidUpdate () {
    $('select').material_select();
    $('label').addClass('active');
  }

  handleSlide (index) {
    //console.log('Slid to ' + index);
  }

  handleCancel () {
    this.props.history.push('home');
  }

  renderCampaign ({ isFetching }) {
    const { campaign } = this.state;
    const { categoryList, intervalList } = this.props;

    if (isFetching || categoryList.isFetching || intervalList.isFetching) {
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
              />
            </div>
          </div>
          <div className="row section">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s12">
                  <input id="name" type="text" className="validate" defaultValue={campaign.title}/>
                  <label htmlFor="name">{Strings.Campaign.FormFields.Title}</label>
                </div>
              </div>
              <div className="row section">
                <div className="input-field col s12">
                  <textarea id="description" className="materialize-textarea" defaultValue={campaign.description}></textarea>
                  <label htmlFor="description">{Strings.Campaign.FormFields.Description}</label>
                </div>
              </div>
              <div className="row section">
                <Input>
                  <Label cssClass="label-react-select" text="Intervalo" />
                  <Select
                    ref="interval"
                    field="interval"
                    placeholder="Selecione um Intervalo"
                    options={intervalList.items}
                    value={campaign.interval}
                  />
                </Input>
              </div>
              <div className="row section">
                <Input>
                  <Label cssClass="label-react-select" text="Categoria" />
                  <Select
                    ref="category"
                    field="category"
                    placeholder="Selecione uma Categoria"
                    options={categoryList.items}
                    value={campaign.category}
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
                  onSlide={this.handleSlide.bind(this)}
                />
              </div>
              <div className="row actions">
                <div className="col s4"><a className="waves-effect waves-light blue btn-large right" onClick={::this.handleCancel}>{Strings.Operations.Cancel}</a></div>
                <div className="col s4"><a className="waves-effect waves-light blue btn-large">{Strings.Operations.Save}</a></div>
                <div className="col s4"><a className="waves-effect waves-light red btn-large left">{Strings.Operations.Delete}</a></div>
              </div>
            </form>
          </div>
        </div>
    );
  }

  render () {
    const { campaign } = this.props;

    const divStyle = {
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '50px',
      padding: '20px',
    };

    return (
      <div className="app-page page-campaign white" style={divStyle}>
        {campaign.isFetching && <div>Loading...</div>}
        {this.renderCampaign(campaign)}
      </div>
    );
  }
}

export default connect((state) => {
  return {
    campaign: state.campaign,
    intervalList: state.intervalList,
    categoryList: state.categoryList,
  };
})(Campaign);
