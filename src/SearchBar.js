import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions';

function SearchBar(props) {
  const handleChange = event => {
    props.searchTermDispatch(event.target.value);
  };

  const handleClick = event => {
    let movieName = props.searchTerm;
    window.alert(movieName);
  };

  return (
    <div>
      <h3> Hello movie lover...</h3>
      <input
        type="text"
        name="Movie"
        value={props.searchTerm}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Submit </button>
    </div>
  );
}

function mapStateToProps(state) {
  return { searchTerm: state.searchTerm };
}

export default connect(mapStateToProps, actions)(SearchBar);

// Movie API, based on searchterm make an api call using 'axios' and store it in state and dispaly it in component.
// Redux logger
// Redux chrome Extension config
// Redux Thunk
// How to use environmental Variables
