import React from 'react';
import ReactSelect from 'react-select';


import { Strings } from '../../constants';


export default React.createClass({

  propTypes: {
    field       : React.PropTypes.string,
    multi       : React.PropTypes.bool,
    onChange    : React.PropTypes.func,
    options     : React.PropTypes.array,
    placeholder : React.PropTypes.string,
    searchable  : React.PropTypes.bool,
    value       : React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
      React.PropTypes.object,
      React.PropTypes.array
    ]),
  },

  getDefaultProps () {
    return {
      searchable: true,
      multi     : false,
      value     : null
    }
  },

  getInitialState () {
    return {
      value: this.props.value
    }
  },

  getText () {
    return this.refs[this.props.field].state.placeholder;
  },

  getValue () {
    const value = this.refs[this.props.field].state.value;

    if (this.props.multi) {
      const arr = value.split(",").map(item => {
        return parseInt(item);
      });

      const items =  this.props.options.filter(item => {
        return arr.indexOf(item.id) !== -1;
      });

      return items;
    }

    return value;
  },

  onChange (value, item) {
    this.setState({
      value: item
    });
    if (!this.props.onChange) return;

    this.props.onChange(value, item[0]);
  },

  render () {
    const options = this.props.options ? this.props.options.map(option => {
      return {
        value: option.id,
        label: option.text
      }
    }) : [];

    let value = this.state.value;

    if (this.props.multi) {
      value = this.props.value.map(item => {
        return item.id
      });
    }

    return (
      <ReactSelect
        ref={this.props.field}
        className="react-select-component"
        clearable={false}
        name={this.props.field}
        noResultsText={Strings.App.ReactSelectNoResults}
        onChange={this.onChange}
        options={options}
        multi={this.props.multi}
        placeholder={this.props.placeholder}
        searchable={this.props.searchable}
        value={value} />
    );
  }

});
