import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Outlet, useLocation } from 'react-router-dom';

const PageTransition = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence wait>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay:0.2,duration: 0.4, ease: "easeInOut" }}
        className='h-screen w-screen fixed bg-primary top-0 '      
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
