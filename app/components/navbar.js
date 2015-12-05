import React from 'react';
import { Link } from 'react-router'

import { Strings } from '../constants';


export default React.createClass({

  propTypes: {
    title: React.PropTypes.string,
    onRightClick: React.PropTypes.func
  },

  getInitialState () {
    return {
      title: this.props.title
    };
  },

  componentDidMount () {
    $('.button-collapse').sideNav({
      menuWidth: 300,     // Default is 240
      edge: 'left',      // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    });
  },

  updateTitle (title) {
    if (this.state.title === title) return;

    this.setState({ title: title });
  },

  onRightClick () {
    if (!this.props.onRightClick) return;

    this.props.onRightClick();
  },

  render () {
    return (
      <nav className="navbar-component blue">
        <div className="left">
        <ul id="slide-out" className="side-nav">
          {this.props.children}
        </ul>
        <a href="#" data-activates="slide-out" className="button-collapse show-on-large"><i className="mdi-navigation-menu"></i></a>
        <a href="#" className="brand-logo center">{this.state.title}</a>
        </div>
        <div className="right login-info">
          <span><Link to='/'>{Strings.Login.LogoutAction}</Link></span>
        </div>
      </nav>
    );
  }

});
