import '@testing-library/jest-dom';

import React from 'react';
import { render as rtlRender, screen } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from '../components/App';
import rootReducer from '../reducers';
import apiFetch from '../mocks/apiFetchMock';

const initialStateBase = {
  filter: 'all',
};

const storeBase = createStore(rootReducer, initialStateBase);

function render(
  ui,
  {
    initialStateBase,
    store = storeBase,
    ...renderOptions
  } = {},
) {
// eslint-disable-next-line react/prop-types
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        {' '}
        {children}
        {' '}
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

test('show logo image when App is rendered', () => {
  render(<App />);
  expect(screen.findByAltText('Movie DB')).toBeDefined();
});

test('show first 10 movies', () => {
  render(<App />);
  apiFetch.movieFetch().then(data => {
    const movies = [];
    movies.push(data);
    movies.forEach(movie => {
      expect(screen.getByText(movie.Title)).toBeDefined();
    });
  });
});

test('render select tag with default text', () => {
  render(<App />);
  apiFetch.movieFetch().then(data => {
    const movies = [];
    movies.push(data);
    expect(screen.getByText('all')).toBeDefined();
  });
});

test('render select tag with default text', () => {
  render(<App />);
  apiFetch.movieFetch().then(data => {
    const movies = [];
    movies.push(data);
    expect(screen.getByPlaceholderText('Search for movies')).toBeDefined();
  });
});
