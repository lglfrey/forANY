import { combineReducers } from 'redux';
// import { testReducer } from './testReducer/testReducer.js';
import { userReducer } from './userReducer/userReducer';
import { loaderReducer } from './loaderReducer/loaderReducer';
import { settingsReducer } from './settingsReducer/settingsReducer';
import { modalsReducer } from './modalsReducer/modalsReducer';
import { PhonebookReducer } from './PhonebookReducer/PhonebookReducer.jsx';
import { searchReducer } from './searchReducer/searchReducer.jsx';
import { GreenButtonreducer } from './greenButtonReducer/greenButtonReducer.jsx';
import { commonReducer } from './commonReducer/commonReducer';
import { bookingsReducer } from './bookingsReducer/bookingsReducer';

const createRootReducer = combineReducers({
  user: userReducer,
  loader: loaderReducer,
  settingsModal: settingsReducer,
  modal: modalsReducer,
  phonebook: PhonebookReducer,
  search: searchReducer,
  greenButton: GreenButtonreducer,
  common: commonReducer,
  bookings: bookingsReducer,
});

export default createRootReducer;
