import { combineReducers } from 'redux';

const initialState = {
  searchTerm: '',
<<<<<<< HEAD
  movies: []
=======
  name: '',
 year: '
>>>>>>> b19513d49b09f88cf75cd3307236f75653b89f9c
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
