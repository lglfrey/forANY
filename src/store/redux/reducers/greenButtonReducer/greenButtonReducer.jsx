const initialState = {
  showTheme: 'none',
  showExtraAction: 'none',
  showWarning: false,
  showShure: false,
  showError: false,
  userName: null,
  vizacomment: '',
  vizadate: '',
  showAllCategories:
    localStorage.getItem('ShowAllCategories') === undefined
      ? true
      : JSON.parse(localStorage.getItem('ShowAllCategories')),
  collapse: true,
  currentTasks: []
};

export const GreenButtonreducer = (state = initialState, action) => {
  switch (action.type) {
    case 'openTheme':
      return { ...state, showTheme: 'block' };
    case 'closeTheme':
      return { ...state, showTheme: 'none' };
    case 'openExtraAction':
      return { ...state, showExtraAction: 'block' };
    case 'closeExtraAction':
      return { ...state, showExtraAction: 'none' };
    case 'setWarningClose':
      return { ...state, showWarning: false };
    case 'setWarningOpen':
      return { ...state, showWarning: true };
    case 'setErrorClose':
      return { ...state, showError: false };
    case 'setErrorOpen':
      return { ...state, showError: true };
    case 'setShure':
      return { ...state, showShure: !state.showShure };
    case 'setUserName':
      return { ...state, userName: action.payload };
    case 'setVizacomment':
      return { ...state, vizacomment: action.payload };
    case 'resetVizacomment':
      return { ...state, vizacomment: '' };
    case 'setVizadate':
      return { ...state, vizadate: action.payload };
    case 'resetVizadate':
      return { ...state, vizadate: '' };      
    case 'setShowAllCategories': {
      const showCategories = !state.showAllCategories;
      localStorage.setItem('ShowAllCategories', showCategories);
      return { ...state, showAllCategories: showCategories };
    }
    case 'toggleCollaps':
      return { ...state, collapse: !state.collapse };
    case 'setcurrentTasks':
      return { ...state, currentTasks: action.currentTasks };
    default:
      return state;
  }
};
