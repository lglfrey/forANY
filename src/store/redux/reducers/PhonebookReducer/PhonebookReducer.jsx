const initialState = {
  user: {}
};

export const PhonebookReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PHONEBOOK_USER':
      return { ...state, user: action.user };
    default:
      return state;
  }
};
