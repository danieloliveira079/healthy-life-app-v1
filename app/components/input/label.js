import React from 'react';


export default React.createClass({

  propTypes: {
    cssClass: React.PropTypes.string,
    text: React.PropTypes.string,
  },

  render () {
    return (
      <label className={`label-component ${this.props.cssClass}`} dangerouslySetInnerHTML={{ __html: this.props.text }}></label>
    );
  },

});
