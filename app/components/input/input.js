import React from 'react';


export default React.createClass({

  propTypes: {
    colClass    : React.PropTypes.string,
    errorMessage: React.PropTypes.string,
  },

  getDefaultProps () {
    return {
      colClass: "s12",
    }
  },

  renderErrorMessage () {
    if (!this.props.errorMessage) return;

    return (
      <div className="error-message">
        {this.props.errorMessage}
      </div>
    )
  },

  render () {
    return (
        <div className={`input-component input-field col ${this.props.colClass}`}>
          {this.props.children}
          {this.renderErrorMessage()}
        </div>
    );
  }

});
