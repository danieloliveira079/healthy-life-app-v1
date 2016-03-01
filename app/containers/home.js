import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCampaigns, invalidateCampaignList } from '../actions/campaign';

import { Strings } from '../constants';

import Campaign from '../components/campaign';

class Home extends Component {

  componentWillMount () {
    this.props.dispatch(fetchCampaigns());
  }

  componentWillReceiveProps (nextProps) {
    const { auth, history } = nextProps;
    if (!auth.isLoggedIn) {
      history.push('login');
    }
  }

  componentWillUnmount () {
    this.props.dispatch(invalidateCampaignList());
  }

  handleCampaignClick (id) {
    this.props.history.push(`/campaign/${id}`);
  }

  handleNewCampaignClick () {
    this.props.history.push(`/campaign`);
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
    auth: state.auth,
    campaignList: state.campaignList,
    isLoggedIn: state.isLoggedIn,
  };
})(Home);
