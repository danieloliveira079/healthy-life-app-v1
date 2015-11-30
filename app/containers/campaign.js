import React from 'react';
import { FluxMixins, RouterMixins } from '../mixins';
import { Strings } from '../constants';

export default React.createClass({

  componentDidMount(){
    $('select').material_select();
  },

  render() {
    const { query } = this.props.location;
    const params = this.props.params;

    return (
      <div className="app-page page-campaign">
        <div className="section">
          <h5>{Strings.Campaign.FormTitle}</h5>
        </div>
        <div className="divider"></div>
          <div className="row section">
            <form className="col s12">
              <div className="row">
                <div className="col s1 m6">
                  <input name="group1" type="radio" id="test1" />
                  <label for="test1">Active</label>
                </div>
                <div className="col s1 m6">
                  <input name="group1" type="radio" id="test2" />
                  <label for="test2">Inactive</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="name" type="text" className="validate"/>
                  <label for="name">Name</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <textarea id="description" className="materialize-textarea"></textarea>
                  <label for="description">Description</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s6">
                  <select>
                    <option value="" selected>Select one interval</option>
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
                    <option value="" selected>Select one category</option>
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
                <div className="col s12 m6">
                  <div className="card small">
                    <div className="card-image">
                      <img src="http://materializecss.com/images/sample-1.jpg" />
                      <span className="card-title">Card Title</span>
                    </div>
                    <div className="card-content">
                      <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                    </div>
                    <div className="card-action">
                      <a href="#">This is a link</a>
                      <a href="#">This is a link</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                add
              </div>
            </form>
          </div>
      </div>
    );
  }

});
