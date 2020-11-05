import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import rootReducer from './reducers/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const defaultState = {
  filter: 'all',
};

const store = createStore(
  rootReducer,
  defaultState,
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
