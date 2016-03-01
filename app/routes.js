import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/app';
import Home from './containers/home';
import Campaign from './containers/campaign';
import Login from './containers/login';
import NoMatch from './containers/no-match';

// import auth from '../services/auth';


function requireAuth (/* nextState, replaceState */) {
  // if (!auth.loggedIn()) {
  //   replaceState({ nextPathname: nextState.location.pathname }, '/login');
  // }
}


export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />

      <Route path="login" component={Login} />
      <Route path="home" component={Home} onEnter={requireAuth} />
      <Route path="campaign/:id" component={Campaign} onEnter={requireAuth} />

      <Route path="*" component={NoMatch} />
    </Route>
  </Route>
);
