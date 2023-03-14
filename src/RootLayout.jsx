import React, { useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import AppVersion from './components/AppVersion.jsx';
//import UserBriefData from './apps/common/components/UserBriefData.jsx';
//import { Toaster } from 'react-hot-toast';
import { getUserData } from './lib/handleAuthData';


export default function RootLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (localStorage.getItem('dark-theme') === 'true') {
      document.body.classList.add('dark-theme');
    }
  }, []);

  useEffect(() => {
    const { userKey, hrUserKey } = getUserData() || {};
    if (!userKey && !hrUserKey) {
      navigate('/login');
    }
    else if (location.pathname === '/') {
      navigate('/some');
    }
  }, []);

  return (
    <div className="main_body">
      <Outlet />
      <AppVersion />
      {/*<UserBriefData />
    
  <Toaster />*/}
    </div>
  );
}
