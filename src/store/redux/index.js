import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import createRootReducer from './reducers';

const middleware = [thunk];

// const initialState = {};
const store = createStore(createRootReducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
