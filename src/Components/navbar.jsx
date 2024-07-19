import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CiMenuFries } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { Button } from "@material-tailwind/react";
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const links = (isMobile) => (
    <ul className={`${isMobile ? "flex flex-col items-center space-y-4 md:hidden" : "hidden md:flex items-center space-x-8"}`}>
      <li>
        <Link 
          to="/" 
          className="text-white hover:text-accent focus:text-accent hover:border-b-2 focus:border-b-2 hover:border-accent focus:border-accent"
          onClick={() => isMobile && setOpen(false)}
        >
          Home
        </Link>
      </li>
      <li>
        <Link 
          to="/services" 
          className="text-white hover:text-accent focus:text-accent hover:border-b-2 focus:border-b-2 hover:border-accent focus:border-accent"
          onClick={() => isMobile && setOpen(false)}
        >
          Services
        </Link>
      </li>
      <li>
        <Link 
          to="/resume" 
          className="text-white hover:text-accent focus:text-accent hover:border-b-2 focus:border-b-2 hover:border-accent focus:border-accent"
          onClick={() => isMobile && setOpen(false)}
        >
          Resume
        </Link>
      </li>
      <li>
        <Link 
          to="/works" 
          className="text-white hover:text-accent focus:text-accent hover:border-b-2 focus:border-b-2 hover:border-accent focus:border-accent"
          onClick={() => isMobile && setOpen(false)}
        >
          Works
        </Link>
      </li>
      <li>
        <Link 
          to="/contact" 
          className="text-white hover:text-accent focus:text-accent hover:border-b-2 focus:border-b-2 hover:border-accent focus:border-accent"
          onClick={() => isMobile && setOpen(false)}
        >
          Contact
        </Link>
      </li>
      <li>
        <Button className="bg-accent hover:bg-green-900 font-mono rounded-full h-9 w-26 flex items-center justify-center text-center text-black py-1 px-3 shadow">
          Hire Me
        </Button>
      </li>
    </ul>
  );

  return (
    <nav className="bg-transparent text-white mb-5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-mono text-white">JEFRIN<span className="text-accent">.</span></Link>
          </div>
          <div className="md:hidden flex justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: isOpen ? 1 : 0, scale: isOpen ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              style={{ display: isOpen ? "block" : "none" }}
            >
              <AiOutlineClose
                className="text-[32px] text-accent cursor-pointer"
                onClick={() => setOpen(false)}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: isOpen ? 0 : 1, scale: isOpen ? 0 : 1 }}
              transition={{ duration: 0.3 }}
              style={{ display: isOpen ? "none" : "block" }}
            >
              <CiMenuFries
                className="text-[32px] text-accent cursor-pointer"
                onClick={() => setOpen(true)}
              />
            </motion.div>
          </div>
          {links(false)}
        </div>
      </div>
      {isOpen && (
        <div className="text-white md:hidden">
          {links(true)}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
