import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import RootLayout from '../RootLayout.jsx';
import LoginPage from '../pages/LoginPage.jsx';
import NotFoundPage from '../pages/NotFoundPage.jsx';
import SomePage from '../pages/SomePage.jsx';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/some" element={<SomePage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;


