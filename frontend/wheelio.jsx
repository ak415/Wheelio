import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { login } from './actions/session_actions';


document.addEventListener('DOMContentLoaded', () => {

  const store = configureStore();

  // JUST FOR TESTING - START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;

  // JUST FOR TESTING - END

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
