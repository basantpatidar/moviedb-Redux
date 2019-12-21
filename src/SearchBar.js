import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

function SearchBar(props) {
  const { searchTerm = '', movies = [] } = props.searchReducer;
  const handleChange = event => {
    props.searchTermDispatch(event.target.value);
    // props.setMovies();
  };

  const handleClick = event => {};

  return (
    <div>
      <h3> Hello movie lover...</h3>
      <input
        type="text"
        name="movieName"
        value={searchTerm}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Submit </button>
      <>
        {movies &&
          movies.map((movie, i) => (
            <div key={i}>
              <h5>
                {movie.Title} - {movie.Year}
              </h5>
              <p>Movie Duration here</p>
              <img src={movie.Poster} alt={movie.Title} />
            </div>
          ))}
      </>
    </div>
  );
}

function mapStateToProps(state) {
  return { searchReducer: state.searchReducer };
}

export default connect(mapStateToProps, actions)(SearchBar);

// Movie API, based on searchterm make an api call using 'axios' and store it in state and dispaly it in component.
// Redux logger -
// Redux chrome Extension config
// Redux Thunk
// How to use environmental Variables
