import 'core-js/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import './styles/index.scss'

import App from './App';

const render = ChildComponent => {
  ReactDOM.render(
    <AppContainer warnings={false}>
      <ChildComponent />
    </AppContainer>,
    document.getElementById('app-container')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    render(App);
  });
}
