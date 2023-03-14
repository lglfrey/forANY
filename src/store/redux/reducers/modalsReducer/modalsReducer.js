const initialState = {
  show: false,
  text: '',
  path: '/hr/'
};

export const modalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SUCCESS_MODAL':
      return { ...state, ...action };
    default:
      return state;
  }
};
