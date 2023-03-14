import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import GreenButtonRoutes from './SubRoutes/GreenButtonRoutes.jsx';

import GreenButtonLayout from '../GreenButtonLayout.jsx';

const Layouts = [
  {
    path: '/inbox',
    element: <GreenButtonLayout />,
    subElements: GreenButtonRoutes
  },
];

export default Layouts;
