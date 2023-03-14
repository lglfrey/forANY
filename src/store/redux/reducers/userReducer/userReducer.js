const initialState = {
  userFio: null,
  userKey: null,
  hrUserKey: null,
  userEmail: null
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'setUserKey':
      return { ...state, userKey: action.payload };
    case 'setUserFio':
      return { ...state, userFio: action.payload };
    case 'setHrUserKey':
      return { ...state, hrUserKey: action.payload };
    case 'setuserEmail':    
      return { ...state, userEmail: action.payload };
    default:
      return state;
  }
};
