import React from 'react';


export default React.createClass({

  getInitialState () {
      return {}
  },

  componentDidMount () {

  },

  render () {
    var style = {
      bottom: '80px',
      right: '24px'
    };

    return (
      <div className="fixed-action-btn" style={style}>
        <a className="btn-floating btn-large waves-effect waves-light red">
          <i className="large material-icons">add</i>
        </a>
      </div>
    );
  }
});
