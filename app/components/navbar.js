import React from 'react';


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
        <ul id="slide-out" className="side-nav">
          {this.props.children}
        </ul>
        <a href="#" data-activates="slide-out" className="button-collapse show-on-large"><i className="mdi-navigation-menu"></i></a>
        <a href="#" className="brand-logo">{this.state.title}</a>
      </nav>
    );
  }

});
