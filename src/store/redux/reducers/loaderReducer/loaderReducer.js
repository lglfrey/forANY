const initialState = {
  show: false
};

export const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GlOBAL_LOADER':
      return { ...state, show: action.show };
    default:
      return state;
  }
};
