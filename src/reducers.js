import { combineReducers } from 'redux';

const initialState = {
  searchTerm: '',
  movies: []
};

const searchReducer = (state = initialState, action) => {
  if (action.type === 'SEARCH_TERM_DISPATCH') {
    return { ...state, searchTerm: action.payload };
    // {  movies: [], serachTerm: action.payload}
  }
  if (action.type === 'SET_MOVIES') {
    return { ...state, movies: action.payload };
    // { serachTerm: 'war', movies: [],  movies: action.payload }
  }
  return state;
};

export default combineReducers({
  searchReducer
});
