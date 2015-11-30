import React from 'react';
import { FluxMixins, RouterMixins } from '../mixins';
import { Strings } from '../constants';

export default React.createClass({

    mixins: [ FluxMixins, RouterMixins ],

    handleQueryClick () {
      this.transitionTo("/about", { q1: 1, q2: "test" });
    },

    handleParamsClick () {
      const param1 = "123";
      const param2 = 456;

      this.transitionTo(`/about/${param1}/test/${param2}`);
    },

    render() {
      return (
        <div>
          <div className="row">
            <div className="section">
              <h5>{Strings.Campaign.Title}</h5>
            </div>
            <div className="divider"></div>
          </div>
          <div className="row">
            <div className="col s12 m6">
              <div className="row">
                  <div className="col s12">Alongamentos para Empresas</div>
                  <div className="col s12">Lista de alongamentos para funcionários fazerem durante o expediente.</div>
                  <div className="col s3">Inscritos</div>
                  <div className="col s3">Slides</div>
                  <div className="col s3">Intervalo</div>
                  <div className="col s3"><a onClick={this.handleQueryClick}>{Strings.Operations.Edit}</a></div>
              </div>
            </div>
          </div>
        </div>
      );
    }

  });
