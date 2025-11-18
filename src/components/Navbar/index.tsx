import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ListIcon, XIcon, UserCircle } from "@phosphor-icons/react"; // Added UserCircle
import { motion, AnimatePresence } from "framer-motion";

import HighlightButton from "@/assets/ButtonDesigns/HighlightButton";
import Logo from "@/assets/Images/DaanPitara.png";
import useAuthStore from "@/assets/Services/authStore";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isloggedin, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setIsOpen(false); // Ensure mobile menu closes if open
    navigate("/signin");
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  return (
    <nav className="sticky top-0 bg-white py-4 px-4 sm:px-6 md:px-8 lg:px-pd-lg flex items-center justify-between relative z-50 shadow-sm">
      {/* --- LOGO SECTION --- */}
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

      {/* --- DESKTOP LINKS --- */}
      <div className="hidden md:flex space-x-10 text-txt-black font-bold text-lg">
        <Link
          to="/fund-form"
          className="hover:text-brand-blue transition-colors duration-200"
        >
          Fundraiser Form
        </Link>
        <Link
          to="/faqs"
          className="hover:text-brand-blue transition-colors duration-200"
        >
          FAQ's
        </Link>
        <Link
          to="/contact"
          className="hover:text-brand-blue transition-colors duration-200"
        >
          Contact Us
        </Link>
        <Link
          to="/blogs"
          className="hover:text-brand-blue transition-colors duration-200"
        >
          Blogs
        </Link>
        <Link
          to="/about"
          className="hover:text-brand-blue transition-colors duration-200"
        >
          About us
        </Link>
      </div>

      {/* --- DESKTOP AUTH SECTION (DROPDOWN) --- */}
      <div className="hidden md:flex items-center">
        {isloggedin ? (
          <div className="relative group">
            {/* Profile Icon Trigger */}
            <button className="flex items-center justify-center p-1 text-brand-blue hover:text-blue-700 transition-colors">
              <UserCircle size={42} weight="fill" />
            </button>

            {/* Dropdown Menu */}
            <div className="absolute right-0 pt-2 w-48 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 ease-in-out transform translate-y-2 group-hover:translate-y-0">
              <div className="bg-white border border-gray-100 rounded-lg shadow-xl overflow-hidden">
                <Link
                  to="/dashboard"
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-brand-blue transition-colors"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-3 text-red-500 hover:bg-red-50 transition-colors border-t border-gray-100"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <HighlightButton to="/signin" text="Sign In" />
        )}
      </div>

      {/* --- MOBILE MENU TOGGLE --- */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <XIcon size={36} /> : <ListIcon size={36} />}
        </button>
      </div>

      {/* --- MOBILE MENU DRAWER --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute top-full left-0 w-full bg-white flex flex-col p-6 md:hidden gap-5 text-lg font-bold shadow-lg"
          >
            <Link
              to="/fund-form"
              className="py-2 hover:text-brand-blue transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Fundraiser Form
            </Link>
            <Link
              to="/faqs"
              className="py-2 hover:text-brand-blue transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              FAQ's
            </Link>
            <Link
              to="/contact"
              className="py-2 hover:text-brand-blue transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              to="/blogs"
              className="py-2 hover:text-brand-blue transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Blogs
            </Link>
            <Link
              to="/about"
              className="py-2 hover:text-brand-blue transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              About us
            </Link>

            <div onClick={() => setIsOpen(false)}>
              {isloggedin ? (
                <div className="flex flex-col gap-4">
                  {/* Line Gap Separator */}
                  <div className="h-px bg-gray-200 w-full" />
                  
                  <Link
                    to="/dashboard"
                    className="py-2 hover:text-brand-blue transition-colors duration-200"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-left text-red-500 py-2 hover:text-red-700 transition-colors duration-200"
                  >
                    Logout
                  </button>
                </div>
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