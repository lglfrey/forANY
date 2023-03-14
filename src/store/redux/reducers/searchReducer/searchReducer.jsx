const initialState = {
  value: ''
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_VALUE':
      return { ...state, ...action };
    default:
      return state;
  }
};
