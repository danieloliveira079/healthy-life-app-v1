import React from 'react';
import { Link } from 'react-router';


import { FluxMixins, RouterMixins } from '../mixins';
import { Strings } from '../constants';

import Navbar from '../components/navbar';
import Btn from '../components/fixed-button';

const menuItems = [
  { name: Strings.Home.Title, route: "/home" },
  { name: Strings.About.Title, route: "/home/about" }
];

export default React.createClass({

  mixins: [ FluxMixins, RouterMixins ],

  getInitialState () {
    return {
      pageTitle: "Home"
    }
  },

  onMenuItemClick (menuItem) {
  /*  if (menuItem.name === Strings.App.Exit) {
      LoginActions.logout();

      this.transitionTo("/login", {}, { logout: 1 });
      return;
    }
*/
    this.transitionTo(menuItem.route);
  },

  onRightClick(){},

  componentDidMount () {
    this.checkNavbarTitle();
  },

  checkNavbarTitle () {
    const pathName = this.props.location;
    console.log(pathName);

    if (/\/about/.test(pathName.pathname)) {
        this.refs.navbar.updateTitle(Strings.About.Title);
    } else if (/\/campaign/.test(pathName.pathname)) {
        this.refs.navbar.updateTitle(Strings.Campaign.Title);
    }
    else {
      this.refs.navbar.updateTitle(Strings.Home.Title);
    }
  },

  componentDidUpdate () {
      this.checkNavbarTitle();
  },

  render () {
    const pathName = this.props.location;

    const menu = menuItems.map((item, index) => {
      let itemClassName = "";

      if (item.route === "/" && /\/home/.test(pathName)) {
        itemClassName += "active";
      }
      else if (item.route === "about" && /\/about/.test(pathName)) {
        itemClassName += "active";
      }

      if (item.name === Strings.App.Exit) itemClassName = " menu-exit";

      return (
        <li key={index} className={itemClassName}>
          <a onClick={this.onMenuItemClick.bind(null, item)}>{item.name}</a>
        </li>
      )
    });
    const footerText = `©  ${new Date().getFullYear()} ${Strings.App.Name}`;

    return (
      <div className="app">
        <div className="wrap grey lighten-4" >
            <Navbar ref="navbar" title={this.state.pageTitle} onRightClick={this.onRightClick}>
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

});
