import React from 'react';
import { Strings } from '../constants';
import Btn from '../components/fixed-button';

import ImageGallery from 'react-image-gallery';

export default React.createClass({

  handleSlide: function(index) {
    console.log('Slid to ' + index);
  },

  handleCancel(){
    this.transitionTo("/home");
  },

  componentDidMount(){
    $('select').material_select();
  },

  render() {
    const { query } = this.props.location;
    const params = this.props.params;
    const images = [
      {
        original: 'http://lorempixel.com/1000/600/nature/1/',
        thumbnail: 'http://lorempixel.com/250/150/nature/1/',
        originalClass: 'featured-slide',
        thumbnailClass: 'featured-thumb',
        description: 'Optional description...'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/2/',
        thumbnail: 'http://lorempixel.com/250/150/nature/2/'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/3/',
        thumbnail: 'http://lorempixel.com/250/150/nature/3/'
      }
    ];

    let divStyle = {
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '50px',
      padding: '20px'
    };

    return (

      <div className="app-page page-campaign white" style={divStyle}>
        <div className="row section">
          <div className="input-field col s2">
              <h5>{Strings.Campaign.FormTitle}</h5>
          </div>
          <div className="input-field col s10">
            <div className="switch">
              <label>
                Inactive
                <input type="checkbox" />
                <span className="lever"></span>
                Active
              </label>
            </div>
          </div>
        </div>
          <div className="row section">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s12">
                  <input id="name" type="text" className="validate"/>
                  <label htmlFor="name">Name</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <textarea id="description" className="materialize-textarea"></textarea>
                  <label htmlFor="description">Description</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6">
                  <select>
                    <option value="">Select one interval</option>
                    <option value="1">00:30</option>
                    <option value="2">01:00</option>
                    <option value="3">24:00</option>
                  </select>
                  <label>Interval</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6">
                  <select>
                    <option value="">Select one category</option>
                    <option value="1">Family and Friends</option>
                    <option value="2">Phisical Activity</option>
                    <option value="3">Nutrition</option>
                    <option value="4">Cigars</option>
                    <option value="5">Alcohol and Drugs</option>
                    <option value="6">Stress</option>
                  </select>
                  <label>Category</label>
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
                   onSlide={this.handleSlide}/>
              </div>
              <div className="row actions">
                <div className="col s4"><a className="waves-effect waves-light blue btn-large right" onClick={this.handleCancel}>{Strings.Operations.Cancel}</a></div>
                <div className="col s4"><a className="waves-effect waves-light blue btn-large">{Strings.Operations.Save}</a></div>
                <div className="col s4"><a className="waves-effect waves-light red btn-large left">{Strings.Operations.Delete}</a></div>
              </div>
            </form>
          </div>
      </div>
    );
  }

});
