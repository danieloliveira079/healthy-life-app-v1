import React from 'react';


export default React.createClass({

  render() {
    const { query } = this.props.location;
    const params = this.props.params;

    return (
      <div className="app-page page-about">
        About Page <br/>

        <div>
          Query: {JSON.stringify(query)}
        </div>

        <div>
          Params: {JSON.stringify(params)}
        </div>
      </div>
    );
  }

});
