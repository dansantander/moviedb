import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
// eslint-disable
const Movie = ({ movie }) => (
  <Link to={`/movie/${movie.imdbID}`} id="link-movie" data-testid="movie_card">
    <div className="card movie">
      <img alt="" className="card-img-top" src={movie.Poster} />
      <div className="card-body">
        <h5 className="card-title">{movie.Title}</h5>
        <p className="card-text">{movie.Year}</p>
        <p className="card-text">{movie.Type}</p>
      </div>
    </div>
  </Link>
);

Movie.propTypes = {
  movie: PropTypes.shape({
    imdbID: PropTypes.string.isRequired,
    Poster: PropTypes.string.isRequired,
    Title: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    Type: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(Movie);
