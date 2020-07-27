import 'core-js/stable';

import React from 'react';
import ReactDOM from 'react-dom';

const appWrapper = document.getElementById('app');

if (appWrapper) {
  ReactDOM.render(
    React.createElement('h1', {}, 'Hello, world!'),
    appWrapper
  );
}
