import React from 'react';
import './assets/css/app.css';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/redux/index.js';

import Choise_Of_FaR from './pages/Choise_Of_FaR';
import InboxPage from './pages/Choise_Of_FaR';


const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <InboxPage />
      </BrowserRouter>
    </Provider>
  );
};

export default App;