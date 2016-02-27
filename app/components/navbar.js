import React, { Component } from 'react';
import { Link } from 'react-router';
import $ from 'jquery';

import { Strings } from '../constants';


export default class Navbar extends Component {

  static propTypes = {
    title: React.PropTypes.string,
    onRightClick: React.PropTypes.func,
    isLoggedIn: React.PropTypes.bool,
  };

  constructor (props) {
    super(props);

    this.state = {
      title: this.props.title,
      isLoggedIn: this.props.isLoggedIn,
    };
  }

  componentDidMount () {
    $('.button-collapse').sideNav({
      menuWidth: 300,     // Default is 240
      edge: 'left',      // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    });
  }

  onRightClick () {
    if (!this.props.onRightClick) return;

    this.props.onRightClick();
  }

  updateTitle (title) {
    if (this.state.title === title) return;

    this.setState({ title });
  }

  renderLoggedIn () {
    const menuStyle = {
      marginLeft: '20px',
    };

    return (
      <nav className="navbar-component blue">
        <div className="left" style={menuStyle}>
          <ul id="slide-out" className="side-nav">
            {this.props.children}
          </ul>
          <a href="#" data-activates="slide-out" className="button-collapse show-on-large"><i className="mdi-navigation-menu"></i></a>
          <a href="#" className="brand-logo center">{this.state.title}</a>
        </div>
        <div className="right login-info">
          <span><Link to="/">{Strings.Login.LogoutAction}</Link></span>
        </div>
      </nav>
    );
  }

  renderNotLoggedIn () {
    const menuStyle = {
      marginLeft: '20px',
    };

    return (
      <nav className="navbar-component blue">
        <div className="left" style={menuStyle}>
          <a href="#" className="brand-logo center">{this.state.title}</a>
        </div>
      </nav>
    );
  }

  render () {
    if (this.state.isLoggedIn) {
      return (this.renderLoggedIn());
    }

    return (this.renderNotLoggedIn());
  }
}
