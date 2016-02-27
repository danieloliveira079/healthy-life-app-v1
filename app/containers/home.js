import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCampaigns } from '../actions/campaign';

import { Strings } from '../constants';

import Campaign from '../components/campaign';

class Home extends Component {
  componentWillReceiveProps (nextProps) {
    const { isLoggedIn, history } = nextProps;
    if (!isLoggedIn) {
      //history.push('login');
    }
  }

  componentWillMount () {
    this.props.dispatch(fetchCampaigns());
  }

  handleCampaignClick (id) {
    this.props.history.push(`/campaign/${id}`);
  }

  handleNewCampaignClick () {
    const param1 = '123';
    this.props.history.push(`/campaign/${param1}`);
  }

  renderCampaigns ({ isFetching, items }) {
    if (isFetching || !items) {
      return null;
    }

    return (
      <div className="row">
        {items.map(item => {
          return (
            <Campaign
              key={item.id}
              campaign={item}
              onClick={::this.handleCampaignClick}
            />
          );
        })}
      </div>
    );
  }

  render () {
    const { campaignList } = this.props;

    return (
      <div className="app-page page-home">
        <div className="section">
          <div className="row">
            <div className="col s6"><h4>{Strings.Campaign.TitleList}</h4></div>
            <div className="col s6"><a className="waves-effect waves-light blue btn-large right" onClick={::this.handleNewCampaignClick}>{Strings.Operations.New}</a></div>
          </div>
        </div>
        <div className="divider"></div>
        {campaignList.isFetching && <div>Loading...</div>}
        {this.renderCampaigns(campaignList)}
      </div>
    );
  }
}

export default connect((state) => {
  return {
    campaignList: state.campaignList,
    isLoggedIn: state.isLoggedIn
  };
})(Home);
