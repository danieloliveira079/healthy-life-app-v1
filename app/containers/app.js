import React, { Component } from 'react';
import { connect } from 'react-redux';

import classNames from 'classnames';

import { Strings } from '../constants';

import Navbar from '../components/navbar';

import auth from '../../services/auth';

const menuItems = [
  { name: Strings.Home.Title, route: '/home' },
  { name: Strings.About.Title, route: '/home/about' },
];

class App extends Component {



  componentDidMount () {
    if (!this.props.auth.isLoggedIn) {
      this.props.history.push('/login');
    }
  }

  onMenuItemClick (menuItem) {
    this.props.history.push(menuItem.route);
  }

  onRightClick () { }


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
            <Navbar ref="navbar" onRightClick={this.onRightClick}>
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
  }
}

export default connect((state) => {
  return {
    auth: state.auth,
  };
})(App);
