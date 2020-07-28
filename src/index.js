import 'core-js/stable';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

const appWrapper = document.getElementById('app');

if (appWrapper) {
  ReactDOM.render(
    React.createElement(App),
    appWrapper
  );
}
