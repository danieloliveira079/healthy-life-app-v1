import React from 'react';

import { Strings } from '../../constants';


export default React.createClass({

  propTypes: {
    field: React.PropTypes.string,
    onClick: React.PropTypes.func,
    valueOn: React.PropTypes.string,
    valueOff: React.PropTypes.string,
    checked: React.PropTypes.bool,
    onChange: React.PropTypes.func,
  },

  getDefaultProps () {
    return {
      valueOn: Strings.Campaign.FormFields.Status.Active,
      valueOff: Strings.Campaign.FormFields.Status.Inactive,
      checked: false,
    },
  }

  getInitialState () {
    return {
      valueOn: this.props.valueOn,
      valueOff: this.props.valueOff,
      value: this.props.checked,
    },
  }

  onChange (event) {
    this.setState({ value: event.target.checked });

    if (this.props.onChange) {
      this.props.onChange(event.target.checked);
    }
  },

  getText () {
    return this.refs[this.props.field].state.placeholder;
  },

  getValue () {
    const value = this.refs[this.props.field].state.checked;

    return value;
  },

  render () {

    return (
      <div className="switch">
        <label>
          {this.props.valueOff}
          <input ref={this.props.field} checked={this.state.value} name={this.props.field} type="checkbox" onChange={this.onChange}/>
          <span className="lever"></span>
          {this.props.valueOn}
        </label>
      </div>
    );
  }

});
