import React from 'react';
import { Outlet } from 'react-router-dom';

const GreenButtonLayout = () => {
  return (
    <div className="main_body bg-design">
      <Outlet />
    </div>
  );
};
export default GreenButtonLayout;
