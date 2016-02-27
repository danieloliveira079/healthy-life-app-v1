import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import Root from './containers/root';
const createHashHistory = require('history/lib/createHashHistory');

import './styles/animate.css';
import 'materialize-css/bin/materialize.css';
import 'materialize-css/bin/materialize.js';
import 'react-select/dist/default.css';
import './styles/app.scss';


const history = createHashHistory({
  queryKey: false,
});


render(
  <Root history={history} />,
  document.getElementById('main')
);
