import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './navbar';
import PageTransition from './pagetransition';
import StairTransition from "./Stairtransition"
const RootLayout = () => {
  const location = useLocation();

  return (
    <div className="root-layout">
      
      <PageTransition location={location}>
       <Header />
        <Outlet />
        <StairTransition/>
      </PageTransition>
    </div>
  );
};

export default RootLayout;
