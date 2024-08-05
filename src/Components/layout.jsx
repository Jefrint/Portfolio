import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './navbar';

 const RootLayout = () => {
  const location = useLocation();

  return (
    <div className="root-layout">
      
       <Header />
        <Outlet />
        
    </div>
  );
};

export default RootLayout;
