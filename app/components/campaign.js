import React, { Component, PropTypes } from 'react';

import { Strings } from '../constants';


export default class Campaign extends Component {
  static propTypes = {
    campaign: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  render () {
    const { campaign, onClick } = this.props;

    return (
      <div className="campaign">
        <div className="col s12 m6">
          <div className="card">
            <div className="card-content">
                <span className="card-title">
                  <b>
                    {campaign.title}
                  </b>
                </span>
                <p>{campaign.description}</p>
            </div>
            <div className="card-action grey lighten-5">
              <a><i className="material-icons small">person_pin</i>15</a>
              <a><i className="material-icons small">picture_in_picture</i>6</a>
              <a><i className="material-icons small">av_timer</i>{campaign.interval}</a>
              <a onClick={() => { onClick(campaign.id); }}>
                <i className="material-icons small">mode_edit</i>{Strings.Operations.Edit}
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
