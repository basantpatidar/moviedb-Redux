import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

function SearchBar(props) {
  const { searchTerm = '', movies = [] } = props.searchReducer;
  const handleChange = event => {
    props.searchTermDispatch(event.target.value);
    // console.log(event);

    // props.setMovies();
  };

  const handleClick = event => {
    // console.log(event.target.value);
  };

  //Implement add Year filter and season search

  return (
    <div>
      <h3> Hello movie lover...</h3>
      <input
        type="text"
        name="movieName"
        value={searchTerm}
        onChange={handleChange}
      />{' '}
      <br></br>
      <input type="text" name="year" onChange={handleChange} />
      <button onClick={handleClick}>Submit </button>
      <>
        {movies &&
          movies.map((movie, i) => (
            <div key={i}>
              <h5>
                {movie.Title} - {movie.Year}
              </h5>
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
