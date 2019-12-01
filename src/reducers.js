const initialState = {
  searchTerm: '',
  name: ''
};

const SearchReducer = (state = initialState, action) => {
  if (action.type === 'SEARCH_TERM_DISPATCH') {
    const newState = {};
    newState.name = state.name;
    newState.searchTerm = action.payload;
    return { ...state, searchTerm: action.payload };
  }
  return state;
};
export default SearchReducer;
