import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import MovieList from '../containers/MovieList';
import MovieDetails from '../containers/MovieDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-dark">
          <div className="nav-container">
            <Link to="/">
              <div className="logo">
                <h1>MovieDB</h1>
              </div>
            </Link>
          </div>
        </nav>
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
