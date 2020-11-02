import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class MovieDetails extends Component {
  /* eslint-disable */
  constructor(props) {
    super(props);
    this.state = {
      details: this.props.details,
      isLoading: true,
    };
  }
  
  componentDidMount() {
    let mounted = true;
    const { imdbID } = this.props.match.params;
    /* eslint-enable */

    // console.log('entering component did mount');
    // console.log(this.props.match.params.imdbID);
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
    // .catch(console.log('failure'));
  }

  render() {
    const { details, isLoading } = this.state;
    // console.log('entered render');
    // console.log(details);
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
  imdbID: PropTypes.string.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      imdbID: PropTypes.string,
    }),
  }).isRequired,
};

export default withRouter(connect(mapStateToProps)(MovieDetails));
