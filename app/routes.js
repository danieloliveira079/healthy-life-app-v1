import React from 'react';
import { IndexRoute, Router, Route } from 'react-router';


import App from './containers/app';
import About from './containers/about';
import Home from './containers/home';
import Campaign from './containers/campaign';
import NoMatch from './containers/no-match';


export default (
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>

      <Route path="about" component={About} />
      <Route path="about/:param1/test/:param2" component={About} />

      <Route path="campaign/:param1" component={Campaign} />

      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
);
