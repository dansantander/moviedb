import '@testing-library/jest-dom';

import { render as rtlRender, screen } from '@testing-library/react';
import React from 'react';
import {
  HashRouter as Router,
} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers';
import Movie from '../components/Movie';

const initialStateBase = {
  filter: 'all',
};

const storeBase = createStore(rootReducer, initialStateBase);
/* eslint-disable */
function render(
  ui,
  {
    initialStateBase,
    store = storeBase,
    ...renderOptions
  } = {},
) {
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

const movie = {
  imdbID: '12345',
  Poster: 'img-url',
  Title: 'Title',
  Year: '1234',
  Type: 'movie',
};

test('movie Poster is loaded when App is rendered', () => {
  render(<Movie movie={movie} />);
  expect(screen.getByTestId('Poster')).toBeDefined();
});

test('movie Title is loaded when App is rendered', () => {
  render(<Movie movie={movie} />);
  expect(screen.getByText(movie.Title)).toBeDefined();
});

test('movie Year is loaded when App is rendered', () => {
  render(<Movie movie={movie} />);
  expect(screen.getByText(movie.Year)).toBeDefined();
});

test('movie Type is loaded when App is rendered', () => {
  render(<Movie movie={movie} />);
  expect(screen.getByText(movie.Type)).toBeDefined();
});
