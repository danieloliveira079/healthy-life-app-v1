import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Strings } from '../constants';


class Home extends Component {

  handleParamsClick () {
    const param1 = '123';
    this.props.history.push(`/campaign/${param1}`);
  }

  render () {
    return (
      <div className="app-page page-home">
        <div className="section">
          <div className="row">
            <div className="col s6"><h4>{Strings.Campaign.TitleList}</h4></div>
            <div className="col s6"><a className="waves-effect waves-light blue btn-large right" onClick={::this.handleParamsClick}>{Strings.Operations.New}</a></div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="row">
          <div className="col s12 m6">
            <div className="card">
              <div className="card-content">
                  <span className="card-title"><b>Alongamentos para Empresas</b></span>
                  <p>Lista de alongamentos para funcionários fazerem durante o expediente.</p>
              </div>
              <div className="card-action grey lighten-5">
                <a><i className="material-icons small">person_pin</i>15</a>
                <a><i className="material-icons small">picture_in_picture</i>6</a>
                <a><i className="material-icons small">av_timer</i>00:30</a>
                <a onClick={::this.handleParamsClick}><i className="material-icons small">mode_edit</i>{Strings.Operations.Edit}</a>
              </div>
          </div>
          </div>
          <div className="col s12 m6">
            <div className="card">
              <div className="card-content">
                  <span className="card-title"><b>Alongamentos para Empresas</b></span>
                  <p>Lista de alongamentos para funcionários fazerem durante o expediente.</p>
              </div>
              <div className="card-action grey lighten-5">
                <a><i className="material-icons small">person_pin</i>15</a>
                <a><i className="material-icons small">picture_in_picture</i>6</a>
                <a><i className="material-icons small">av_timer</i>00:30</a>
                <a onClick={::this.handleParamsClick}><i className="material-icons small">mode_edit</i>{Strings.Operations.Edit}</a>
              </div>
          </div>
          </div>
          <div className="col s12 m6">
            <div className="card">
              <div className="card-content">
                  <span className="card-title"><b>Alongamentos para Empresas</b></span>
                  <p>Lista de alongamentos para funcionários fazerem durante o expediente.</p>
              </div>
              <div className="card-action grey lighten-5">
                <a><i className="material-icons small">person_pin</i>15</a>
                <a><i className="material-icons small">picture_in_picture</i>6</a>
                <a><i className="material-icons small">av_timer</i>00:30</a>
                <a onClick={::this.handleParamsClick}><i className="material-icons small">mode_edit</i>{Strings.Operations.Edit}</a>
              </div>
          </div>
          </div>
          <div className="col s12 m6">
            <div className="card">
              <div className="card-content">
                  <span className="card-title"><b>Alongamentos para Empresas</b></span>
                  <p>Lista de alongamentos para funcionários fazerem durante o expediente.</p>
              </div>
              <div className="card-action grey lighten-5">
                <a><i className="material-icons small">person_pin</i>15</a>
                <a><i className="material-icons small">picture_in_picture</i>6</a>
                <a><i className="material-icons small">av_timer</i>00:30</a>
                <a onClick={::this.handleParamsClick}><i className="material-icons small">mode_edit</i>{Strings.Operations.Edit}</a>
              </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(() => {
  return { };
})(Home);
