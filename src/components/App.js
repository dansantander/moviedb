import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import MovieList from '../containers/MovieList';
import MovieDetails from '../containers/MovieDetails';
import Header from './Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/movie/:imdbID" component={MovieDetails}>
            <MovieDetails />
          </Route>
          <Route exact path="/">
            <MovieList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
