import React from 'react';
import classNames from 'classnames';

import { Strings } from '../constants';

import Navbar from '../components/navbar';

import auth from '../../services/auth';

const menuItems = [
  { name: Strings.Home.Title, route: '/home' },
  { name: Strings.About.Title, route: '/home/about' },
];

export default React.createClass({

  getInitialState () {
    return {
      pageTitle: 'Healthy Life',
      loggedIn: auth.loggedIn(),
    };
  },

  componentWillMount () {
    auth.onChange = this.updateAuth;
    auth.login();
  },

  componentDidMount () {
    this.checkNavbarTitle();
    if (!this.state.isLoggedIn) {
      this.props.history.push('/login');
    }
  },

  componentDidUpdate () {
    this.checkNavbarTitle();
  },

  onMenuItemClick (menuItem) {
    this.props.history.push(menuItem.route);
  },

  onRightClick () { },

  checkNavbarTitle () {
    const pathName = this.props.location;

    if (/\/about/.test(pathName.pathname)) {
      this.refs.navbar.updateTitle(Strings.About.Title);
    } else if (/\/campaign/.test(pathName.pathname)) {
      this.refs.navbar.updateTitle(Strings.Campaign.Title);
    } else {
      this.refs.navbar.updateTitle(Strings.App.Name);
    }
  },

  updateAuth (loggedIn) {
    this.setState({
      loggedIn,
    });
  },

  render () {
    const pathName = this.props.location;

    const menu = menuItems.map((item, index) => {
      const itemClassName = classNames(
        { 'active': item.route === '/' && /\/home/.test(pathName) },
        { 'active': item.route === 'about' && /\/about/.test(pathName) },
        { 'menu-exit': item.name === Strings.App.Exit },
      );

      return (
        <li key={index} className={itemClassName}>
          <a onClick={this.onMenuItemClick.bind(null, item)}>{item.name}</a>
        </li>
      );
    });

    return (
      <div className="app">
        <div className="wrap grey lighten-4" >
            <Navbar ref="navbar" isLoggedIn={this.state.loggedIn} title={this.state.pageTitle} onRightClick={this.onRightClick}>
              {menu}
            </Navbar>

            <div className="container main">
              {this.props.children}
            </div>
      </div>
        <footer className="page-footer blue">
         <div className="footer-copyright">
            <div className="container center">
            {Strings.App.FooterText} {Strings.App.Name}
            </div>
          </div>
        </footer>
      </div>
    );
  },

});
