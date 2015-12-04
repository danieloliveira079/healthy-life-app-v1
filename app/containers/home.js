import React from 'react';
import { FluxMixins, RouterMixins } from '../mixins';
import { Strings } from '../constants';
import Btn from '../components/fixed-button';

export default React.createClass({

    mixins: [ FluxMixins, RouterMixins ],

    handleQueryClick () {
      this.transitionTo("/campaign", { q1: 1});
    },

    handleParamsClick () {
      const param1 = "123";
      this.transitionTo(`/campaign/${param1}`);
    },

    render() {
      let style = {
        top: '75px',
        left: '180px'
      };

      return (
        <div className="app-page page-home">
          <div className="section">
            <h5>{Strings.Campaign.Title}</h5>

          </div>
          <div className="divider"></div>
          <div className="row">
            <div className="col s12 m6">
              <div className="card">
                <div className="card-content">
                    <span className="card-title"><b>Alongamentos para Empresas</b></span>
                    <p>Lista de alongamentos para funcionários fazerem durante o expediente.</p>
                </div>
                <div className="card-action">
                  <a><i className="material-icons small">person_pin</i>15</a>
                  <a><i className="material-icons small">picture_in_picture</i>6</a>
                  <a><i className="material-icons small">av_timer</i>00:30</a>
                  <a onClick={this.handleParamsClick}><i className="material-icons small">mode_edit</i>{Strings.Operations.Edit}</a>
                </div>
            </div>
            </div>
            <div className="col s12 m6">
              <div className="card">
                <div className="card-content">
                    <span className="card-title"><b>Alongamentos para Empresas</b></span>
                    <p>Lista de alongamentos para funcionários fazerem durante o expediente.</p>
                </div>
                <div className="card-action">
                  <a><i className="material-icons small">person_pin</i>15</a>
                  <a><i className="material-icons small">picture_in_picture</i>6</a>
                  <a><i className="material-icons small">av_timer</i>00:30</a>
                  <a onClick={this.handleParamsClick}><i className="material-icons small">mode_edit</i>{Strings.Operations.Edit}</a>
                </div>
            </div>
            </div>
            <div className="col s12 m6">
              <div className="card">
                <div className="card-content">
                    <span className="card-title"><b>Alongamentos para Empresas</b></span>
                    <p>Lista de alongamentos para funcionários fazerem durante o expediente.</p>
                </div>
                <div className="card-action">
                  <a><i className="material-icons small">person_pin</i>15</a>
                  <a><i className="material-icons small">picture_in_picture</i>6</a>
                  <a><i className="material-icons small">av_timer</i>00:30</a>
                  <a onClick={this.handleParamsClick}><i className="material-icons small">mode_edit</i>{Strings.Operations.Edit}</a>
                </div>
            </div>
            </div>
            <div className="col s12 m6">
              <div className="card">
                <div className="card-content">
                    <span className="card-title"><b>Alongamentos para Empresas</b></span>
                    <p>Lista de alongamentos para funcionários fazerem durante o expediente.</p>
                </div>
                <div className="card-action">
                  <a><i className="material-icons small">person_pin</i>15</a>
                  <a><i className="material-icons small">picture_in_picture</i>6</a>
                  <a><i className="material-icons small">av_timer</i>00:30</a>
                  <a onClick={this.handleParamsClick}><i className="material-icons small">mode_edit</i>{Strings.Operations.Edit}</a>
                </div>
            </div>
            </div>
          </div>
        </div>
      );
    }

  });
