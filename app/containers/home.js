import React from 'react';


import { FluxMixins, RouterMixins } from '../mixins';


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
        <div className="app-page page-home">
          Home Page

          <br />
          <a onClick={this.handleQueryClick}>About (query)</a>
          <br />
          <a onClick={this.handleParamsClick}>About (params)</a>
        </div>
      );
    }

  });
