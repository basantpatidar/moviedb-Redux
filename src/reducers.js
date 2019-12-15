import { combineReducers } from 'redux';

const initialState = {
  searchTerm: '',
};
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
