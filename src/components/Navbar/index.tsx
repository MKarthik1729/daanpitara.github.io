import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ListIcon, XIcon } from "@phosphor-icons/react"; 
import { motion, AnimatePresence } from "framer-motion";

import HighlightButton from "@/assets/ButtonDesigns/HighlightButton";
import Logo from "@/assets/Images/DaanPitara.png";
import { isLoggedIn, logoutUser } from "@/assets/Services/authService";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoggedIn(isLoggedIn());
  }, []);

  const handleLogout = () => {
    logoutUser();
    setLoggedIn(false);
    navigate("/signin");
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  return (
    <nav className="sticky top-0 bg-white py-4 px-6 flex items-center justify-between relative z-50">
      {/* Left: Logo */}
      <div className="text-xl font-bold flex items-center">
        <Link to="/" className="flex items-center">
<div className="h-15 w-15 overflow-hidden inline-block ">
  <img
    src={Logo}
    alt="DaanPitara Logo"
    className="h-full w-full object-cover scale-125"
  />
</div>
          <span>Daan</span>
          <span className="text-brand-blue ">Pitara</span>
        </Link>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-10 text-txt-black font-bold text-lg">
        {/* <Link to="/" className="hover:text-brand-blue transition-colors duration-200">Home</Link> */}
        <Link to="/fund-form" className="hover:text-brand-blue transition-colors duration-200">Fundraiser Form</Link>
        <Link to="/faqs" className="hover:text-brand-blue transition-colors duration-200">FAQ's</Link>
        <Link to="/contact" className="hover:text-brand-blue transition-colors duration-200">Contact Us</Link>
        <Link to="/blogs" className="hover:text-brand-blue transition-colors duration-200">Blogs</Link>
        <Link to="/about" className="hover:text-brand-blue transition-colors duration-200">About us</Link>
      </div>

      {/* Desktop Sign Up */}
      <div className="hidden md:flex">
        {loggedIn ? (
          <button onClick={handleLogout} className="bg-brand-blue text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-200">Logout</button>
        ) : (
          <HighlightButton to="/signin" text="Sign In" />
        )}
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <XIcon size={36} /> : <ListIcon size={36} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute top-full left-0 w-full bg-white flex flex-col p-6 md:hidden gap-5 text-lg font-bold"
          >
            {/* <Link to="/" className="py-2 hover:text-brand-blue transition-colors duration-200" onClick={() => setIsOpen(false)}>Home</Link> */}
            <Link to="/fund-form" className="py-2 hover:text-brand-blue transition-colors duration-200" onClick={() => setIsOpen(false)}>Fundraiser Form</Link>
            <Link to="/faqs" className="py-2 hover:text-brand-blue transition-colors duration-200" onClick={() => setIsOpen(false)}>FAQ's</Link>
            <Link to="/contact" className="py-2 hover:text-brand-blue transition-colors duration-200" onClick={() => setIsOpen(false)}>Contact Us</Link>
            <Link to="/blogs" className="py-2 hover:text-brand-blue transition-colors duration-200" onClick={() => setIsOpen(false)}>Blogs</Link>
            <Link to="/about" className="py-2 hover:text-brand-blue transition-colors duration-200" onClick={() => setIsOpen(false)}>About us</Link>
            <div onClick={() => setIsOpen(false)}>
              {loggedIn ? (
                <button onClick={handleLogout} className="bg-brand-blue text-white font-bold py-2 px-4 rounded w-full text-left hover:bg-blue-700 transition-colors duration-200">Logout</button>
              ) : (
                <HighlightButton to="/signin" text="Sign In" />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
