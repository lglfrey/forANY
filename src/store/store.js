// import { createStore } from 'redux';

// const initialState = {
//   showTheme: 'none',
//   showExtraAction: 'none',
//   darkTheme:
//     localStorage.getItem('dark-theme') === undefined
//       ? 'dark-theme'
//       : JSON.parse(localStorage.getItem('dark-theme'))
//       ? 'dark-theme'
//       : '',
//   showWarning: false,
//   showShure: false,
//   showError: false,
//   userName: null,
//   userFio: null,
//   userKey: null,
//   vizacomment: '',
//   showAllCategories:
//     localStorage.getItem('ShowAllCategories') === undefined
//       ? true
//       : JSON.parse(localStorage.getItem('ShowAllCategories')),
//   collapse: true,
//   currentTasks: [],
//   showMeetings: false,
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'openTheme':
//       return { ...state, showTheme: 'block' };
//     case 'closeTheme':
//       return { ...state, showTheme: 'none' };
//     case 'openExtraAction':
//       return { ...state, showExtraAction: 'block' };
//     case 'closeExtraAction':
//       return { ...state, showExtraAction: 'none' };
//     case 'setDark':
//       return { ...state, darkTheme: 'dark-theme' };
//     case 'setWhite':
//       return { ...state, darkTheme: '' };
//     case 'setWarningClose':
//       return { ...state, showWarning: false };
//     case 'setWarningOpen':
//       return { ...state, showWarning: true };
//     case 'setErrorClose':
//       return { ...state, showError: false };
//     case 'setErrorOpen':
//       return { ...state, showError: true };
//     case 'setShure':
//       return { ...state, showShure: !state.showShure };
//     case 'setUserName':
//       return { ...state, userName: action.payload };
//     case 'setUserKey':
//       return { ...state, userKey: action.payload };
//     case 'setUserFio':
//       return { ...state, userFio: action.payload };
//     case 'setVizacomment':
//       return { ...state, vizacomment: action.payload };
//     case 'resetVizacomment':
//       return { ...state, vizacomment: '' };
//     case 'setShowAllCategories': {
//       const showCategories = !state.showAllCategories;
//       localStorage.setItem('ShowAllCategories', showCategories);
//       return { ...state, showAllCategories: showCategories };
//     }
//     case 'toggleCollaps':
//       return { ...state, collapse: !state.collapse };
//     case 'setcurrentTasks':
//       return { ...state, currentTasks: action.currentTasks };
//     default:
//       return state;
//   }
// };

// const store = createStore(reducer);

// export default store;
