import React from 'react';
import '@babel/polyfill';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App/App';
import configureStore from './store';

//Configure store
const store = configureStore();

//Connects store to app and binds react components to root.
render(
  <Provider store={store}>
    <div>
      <App />
    </div>
  </Provider>,
  document.getElementById('root'),
);
