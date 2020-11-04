import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    const { details } = this.props;
    this.state = {
      details,
      isLoading: true,
    };
  }

  componentDidMount() {
    let mounted = true;
    const { match } = this.props;
    const { imdbID } = match.params;

    axios.get(`http://www.omdbapi.com/?apikey=1f69237e&i=${imdbID}`)
      .then(result => {
        if (mounted) {
          this.setState({
            details: result.data,
            isLoading: false,
          });
          mounted = false;
        }
      });
  }

  render() {
    const { details, isLoading } = this.state;
    return (
      <>
        { !isLoading ? (
          <div className="card movie-details my-5">
            <img alt="" className="card-img-top" src={details.Poster} />
            <div className="card-body">
              <h3 className="" data-testid="Title">
                {details.Title}
              </h3>
              <h5 className="" data-testid="Actors">
                Actors:
                {' '}
                {details.Actors}
              </h5>
              <p className="">
                Plot:
                {' '}
                {details.Plot}
              </p>
              <p className="">
                Director:
                {' '}
                {details.Director}
              </p>
              <p className="">
                Rated:
                {' '}
                {details.Rated}
              </p>
              <p className="">
                Type:
                {' '}
                {details.Type}
              </p>
              <p className="">
                Released:
                {' '}
                {details.Released}
              </p>
              <p className="">
                Runtime:
                {' '}
                {details.Runtime}
              </p>
              <p className="">
                Genre:
                {' '}
                {details.Genre}
              </p>
              <p className="">
                IMDB Rating:
                {' '}
                {details.imdbRating}
              </p>
            </div>
          </div>
        ) : (
          <h3>Loading...</h3>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  details: state.details,
});

MovieDetails.propTypes = {
  details: PropTypes.shape({
    Actors: PropTypes.string,
    Awards: PropTypes.string,
    BoxOffice: PropTypes.string,
    Country: PropTypes.string,
    DVD: PropTypes.string,
    Director: PropTypes.string,
    Genre: PropTypes.string,
    Language: PropTypes.string,
    Metascore: PropTypes.string,
    Plot: PropTypes.string,
    Poster: PropTypes.string,
    Production: PropTypes.string,
    Rated: PropTypes.string,
    Ratings: PropTypes.arrayOf(PropTypes.string),
    Released: PropTypes.string,
    Response: PropTypes.string,
    Runtime: PropTypes.string,
    Title: PropTypes.string,
    Type: PropTypes.string,
    Website: PropTypes.string,
    Writer: PropTypes.string,
    Year: PropTypes.string,
    imdbID: PropTypes.string,
    imdbRating: PropTypes.string,
    imdbVotes: PropTypes.string,
  }),
  imdbID: PropTypes.string.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      imdbID: PropTypes.string,
    }),
  }).isRequired,
};

MovieDetails.defaultProps = {
  details: {
    Actors: '',
    Awards: '',
    BoxOffice: '',
    Country: '',
    DVD: '',
    Director: '',
    Genre: '',
    Language: '',
    Metascore: '',
    Plot: '',
    Poster: '',
    Production: '',
    Rated: '',
    Ratings: [],
    Released: '',
    Response: '',
    Runtime: '',
    Title: '',
    Type: '',
    Website: '',
    Writer: '',
    Year: '',
    imdbID: '',
    imdbRating: '',
    imdbVotes: '',
  },
};

export default withRouter(connect(mapStateToProps)(MovieDetails));
