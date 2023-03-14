const initialState = {
  showLoader: false,
  date: new Date(),
  sheduleModalData: { show: false, startTime: '8:00', endTime: '', room: '', Shedules: [], Busytimes: [], Name: '', Description: ''  },
  userData: { mail: '' },
  refresh: false,
  bookingDisabled: false,
};

export const bookingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ShowLoader':
      return { ...state, showLoader: true };   
    case 'HideLoader':
      return { ...state, showLoader: false };
    case 'SetDate':
      return { ...state, date: action.date };  
    case 'SetSheduleModalData':
      return { ...state, sheduleModalData: { ...action.sheduleModalData }};                                   
    case 'RefreshMeetings':
      return { ...state, refresh: action };  
    case 'SetUserMail':
      return { ...state, userData: { mail: action.mail }  };   
    default:
      return state;
  }
};
