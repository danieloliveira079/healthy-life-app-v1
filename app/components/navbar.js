import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { logout } from '../actions/auth';

import { Strings } from '../constants';


class Navbar extends Component {

  componentWillReceiveProps (nextProps) {
    const { auth, history } = nextProps;
    if (auth.isLoggedIn) {
      //history.push('home');
    }
  }

  handleLogout () {
    const { dispatch, auth } = this.props;

    if (auth.isFetching) {
      return;
    }

    dispatch(logout());
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
          <a href="#" className="brand-logo center">APP LOGO</a>
        </div>
        <div className="right login-info">
          <span><Link to="/" onClick={::this.handleLogout}>{Strings.Login.LogoutAction}</Link></span>
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
          <a href="#" className="brand-logo center">APP</a>
        </div>
      </nav>
    );
  }

  render () {
    if (this.props.auth.isLoggedIn) {
      return (this.renderLoggedIn());
    }

    return (this.renderNotLoggedIn());
  }
}

export default connect((state) => {
  return {
    auth: state.auth,
  };
})(Navbar);
