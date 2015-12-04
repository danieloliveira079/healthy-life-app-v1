import React from 'react';


export default React.createClass({

  getInitialState () {
      return {}
  },

  componentDidMount () {

  },

  render () {
    let style = {
      bottom: '80px',
      right: '24px'
    };

    let divStyle = {
      position: 'relative'
    }

    let fixedStyle = {
      position: 'absolute',
      display: 'inline-block',
      right: '24px'
    }

    if (this.props.btnType === 'fixed') {
        return(
          <div style={divStyle}>
            <div className="fixed-action-btn horizontal" style={this.props.style || fixedStyle}>
              <a className="btn-floating btn-large red">
                <i className="large material-icons">add</i>
              </a>
            </div>
          </div>
        )
    }

    return (
      <div className="fixed-action-btn horizontal" style={this.props.style || style}>
        <a className="btn-floating btn-large waves-effect waves-light red">
          <i className="large material-icons">add</i>
        </a>
      </div>
    );
  }
});
