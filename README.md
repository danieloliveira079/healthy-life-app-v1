# react-webpack-template

This is my template for building a ReactJS app with all the boilerplate you need to get started:

- No gulp
- No grunt
- es6 syntax (click [here](https://babeljs.io/docs/learn-es6/) if you need more information about es6)


## Development

* Change the default container in `app/app.js`

```js
import React from 'react';
import App from './containers/[your_default_container]';
import './styles/app.scss';

React.render(<App />, document.getElementById('main'));
```

* Change the output file name (*if you want to*) in `index.html` and `webpack.config.js`

```html
<script src="./build/[your_output_file]"></script>
```

```js
output: {
  path: 'build',
  publicPath: 'build/',
  filename: '[your_output_file]'
},
```

* Development server `npm run dev`
* Continuously run tests on file changes `npm run watch-test`
* Run tests: `npm test`
* Build `npm run build`
