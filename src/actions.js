import axios from 'axios';

export const searchTermDispatch = term => async dispatch => {
  dispatch({
    type: 'SEARCH_TERM_DISPATCH',
    payload: term
  });
  const res = await axios.get(
    `http://www.omdbapi.com/?apiKey=4b574537&s=${term}`
  );
  dispatch({
    type: 'SET_MOVIES',
    payload: res.data.Search
  });
};

// //
export const setMovies = () => async (dispatch, getState) => {
  const {
    searchReducer: { searchTerm }
  } = getState();
  const res = await axios.get(
    `http://www.omdbapi.com/?apiKey=4b16516651637&s=${searchTerm}`
  );
  dispatch({
    type: 'SET_MOVIES',
    payload: res.data.Search
  });
};
