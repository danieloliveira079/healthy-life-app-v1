import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/app';
import About from './containers/about';
import Home from './containers/home';
import Campaign from './containers/campaign';
import Login from './containers/login'
import NoMatch from './containers/no-match';


function requireAuth(nextState, replaceState) {
  if (!auth.loggedIn())
    replaceState({ nextPathname: nextState.location.pathname }, '/login')
}


export default (
  <Route>
    <Route path="/" component={App} >
      <Route path="login" component={Login} />
      <Route path="home" component={Home} onEnter={requireAuth}/>
      <Route path="campaign/:param1" component={Campaign} onEnter={requireAuth}/>
      <Route path="about" component={About} />
      <Route path="about/:param1/test/:param2" component={About} />
      <Route path="*" component={NoMatch}/>
    </Route>
  </Route>
);
