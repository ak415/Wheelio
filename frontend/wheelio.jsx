//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import Root from './components/root';
import configureStore from './store/store';
import { clearError } from './actions/session_actions';
import { fetchCar } from './actions/car_actions';

document.addEventListener('DOMContentLoaded', () => {
//User  bootstrapping

  let store;
  window.clearError = clearError;
  window.fetchCar = fetchCar;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    window.store = store;
    delete window.currentUser;
  } else {
    store = configureStore();
    window.store = store;
  }
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
