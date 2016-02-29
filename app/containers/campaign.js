import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCampaignById } from '../actions/campaign';
import ImageGallery from 'react-image-gallery';

import { Strings } from '../constants';


class Campaign extends Component {

  componentWillMount () {
    const id = this.props.params.param1
    this.props.dispatch(fetchCampaignById(id));
  }

  componentDidUpdate () {
    $('select').material_select();
    $('label').addClass('active')
  }

  handleSlide (index) {
    //console.log('Slid to ' + index);
  }

  handleCancel () {
    this.props.history.push('home');
  }

  renderCampaign ({isFetching, item}) {

    if (isFetching || !item) {
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
              <div className="switch">
                <label>
                  {Strings.Campaign.FormFields.Status.Inactive}
                  <input type="checkbox" />
                  <span className="lever"></span>
                  {Strings.Campaign.FormFields.Status.Active}
                </label>
              </div>
            </div>
          </div>
          <div className="row section">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s12">
                  <input id="name" type="text" className="validate" defaultValue={item.title}/>
                  <label htmlFor="name">{Strings.Campaign.FormFields.Title}</label>
                </div>
              </div>
              <div className="row section">
                <div className="input-field col s12">
                  <textarea id="description" className="materialize-textarea" defaultValue={item.description}></textarea>
                  <label htmlFor="description">{Strings.Campaign.FormFields.Description}</label>
                </div>
              </div>
              <div className="row section">
                <div className="input-field col s6">
                  <select>
                    <option value="1">00:30</option>
                    <option value="2">01:00</option>
                    <option value="3">24:00</option>
                  </select>
                  <label>{Strings.Campaign.FormFields.Interval}</label>
                </div>
              </div>
              <div className="row section">
                <div className="input-field col s6">
                  <select>
                    <option value="1">Family and Friends</option>
                    <option value="2">Phisical Activity</option>
                    <option value="3">Nutrition</option>
                    <option value="4">Cigars</option>
                    <option value="5">Alcohol and Drugs</option>
                    <option value="6">Stress</option>
                  </select>
                  <label>{Strings.Campaign.FormFields.Category}</label>
                </div>
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

  render(){

    const { campaign } = this.props;

    const divStyle = {
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '50px',
      padding: '20px',
    };


    return(
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
  };
})(Campaign);
