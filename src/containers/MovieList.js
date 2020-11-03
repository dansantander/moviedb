import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import Movie from '../components/Movie';
import CategoryFilter from '../components/CategoryFilter';
import { changeFilter } from '../actions/index';

class MovieList extends Component {
  /* eslint-disable */
  constructor(props) {
    super(props);
    this.state = {
      movies: this.props.movies,
      input: '',
      isLoading: true,
    };
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.showMovie = this.showMovie.bind(this);
    this.submitQuery = this.submitQuery.bind(this);
  }
  /* eslint-enable */

  componentDidMount() {
    axios.get('http://www.omdbapi.com/?apikey=1f69237e&s=Batman')
      .then(result => {
        this.setState({
          movies: result.data.Search,
          isLoading: false,
        });
      });
  }

  handleQueryChange = e => {
    this.setState({
      input: e.target.value,
    });
  };

  handleFilterChange(filter) {
    const { changeFilter } = this.props;
    changeFilter(filter);
  }

  showMovie(movie) {
    const { filter } = this.props;
    if (filter === 'all') {
      return true;
    }
    if (filter === movie.Type) {
      return true;
    }
    return false;
  }

  submitQuery(e) {
    e.preventDefault();
    const { input } = this.state;

    axios.get(`http://www.omdbapi.com/?apikey=1f69237e&s=${input}`)
      .then(result => {
        this.setState({
          input: '',
          movies: result.data.Search,
        });
      });
  }

  render() {
    const { movies, input, isLoading } = this.state;

    return (
      <>
        { !isLoading ? (
          <div className="grid-container mt-3">
            <div className="cat-container">
              <CategoryFilter change={this.handleFilterChange} />

              <form className="form-inline mt-3" onSubmit={this.submitQuery}>
                <input id="searchBar" className="form-control mr-sm-2" value={input} onChange={this.handleQueryChange} placeholder="Search for movies" />
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Submit</button>
              </form>

            </div>

            <div className="movie-container">
              { movies
                ? movies.filter(movie => (this.showMovie(movie))).map(movie => (
                  <Movie key={movie.imdbID} movie={movie} />
                ))
                : (
                  <h3 className="no-data">Not data found for that query.</h3>
                )}
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
  movies: state.movies,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  changeFilter: filter => {
    dispatch(changeFilter(filter));
  },
});

MovieList.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
