const initialState = {
  show: false
};

export const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SETTINGS_MODAL':
      return { ...state, show: action.show };
    default:
      return state;
  }
};
