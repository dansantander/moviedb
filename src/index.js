import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import rootReducer from './reducers/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const defaultState = {
  movies: [],
  filter: 'all',
  details: {},
};

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  { movies: defaultState.movies },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
