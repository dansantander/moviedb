import '@testing-library/jest-dom';

import React from 'react';
import { render as rtlRender, screen } from '@testing-library/react';
import {
  HashRouter as Router,
} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers';
import Header from '../components/Header';

function render(
  ui,
  {
    initialState = {
      filter: 'all',
    },
    store = createStore(rootReducer, initialState),
    ...renderOptions
  } = {},
) {
// eslint-disable-next-line react/prop-types
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <Router>
          {' '}
          {children}
          {' '}
        </Router>
        {' '}
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

test('display logo when header is rendered', () => {
  render(<Header />);
  expect(screen.findByAltText('Movie DB')).toBeDefined();
});

test('display nav links when header is rendered', () => {
  render(<Header />);
  expect(screen.findByAltText('Home')).toBeDefined();
  expect(screen.findByAltText('Genre')).toBeDefined();
  expect(screen.findByAltText('Country')).toBeDefined();
  expect(screen.findByAltText('Top OMDB')).toBeDefined();
  expect(screen.findByAltText('Requested')).toBeDefined();
  expect(screen.findByAltText('A-Z List')).toBeDefined();
});

test('display log in and sign up when header is rendered', () => {
  render(<Header />);
  expect(screen.findByAltText('Log In')).toBeDefined();
  expect(screen.findByAltText('Sign Up')).toBeDefined();
});
