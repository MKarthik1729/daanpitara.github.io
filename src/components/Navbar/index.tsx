import { useState, useEffect, useRef } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { ListIcon, XIcon, UserCircleIcon } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";

import HighlightButton from "@/assets/ButtonDesigns/HighlightButton";
import Logo from "@/assets/Images/DaanPitara.png";
import useAuthStore from "@/assets/Services/authStore";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const profileRef = useRef<HTMLDivElement>(null);

  const { isloggedin, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/signin");
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "FAQ'S", path: "/faqs" },
    { name: "Contact Us", path: "/contact" },
    { name: "Blogs", path: "/blogs" },
    { name: "About Us", path: "/about" },
  ];

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 bg-white px-4 lg:px-[50px] flex items-center justify-between relative z-50 shadow-[0_8px_10px_0_rgba(0,0,0,0.25)]">

      {/* Logo */}
      <div className="text-xl font-bold flex items-center shrink-0">
        <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
          <div className="h-27 w-27 overflow-hidden inline-block">
            <img src={Logo} alt="DaanPitara Logo" className="h-full w-full object-cover scale-175" />
          </div>
        </Link>
      </div>

      {/* Desktop Nav */}
      <div className="hidden lg:flex items-center gap-6 text-txt-black font-bold text-lg">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `
              relative inline-flex items-center justify-center gap-[10px] p-[10px] transition duration-200
              border-b-2 ${
                isActive
                  ? "border-brand-blue text-brand-blue"
                  : "border-transparent hover:border-brand-blue hover:text-brand-blue"
              }
            `
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      {/* Desktop Profile */}
      <div className="hidden lg:flex shrink-0 relative" ref={profileRef}>
        {isloggedin ? (
          <div className="relative">
            <button onClick={() => setProfileOpen((prev) => !prev)} className="flex items-center">
              <UserCircleIcon size={40} className="text-brand-blue cursor-pointer" />
            </button>

            {profileOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg border rounded-lg p-2 flex flex-col z-50">
                <Link
                  to="/dashboard"
                  className="px-3 py-2 hover:bg-gray-100 rounded"
                  onClick={() => setProfileOpen(false)}
                >
                  Dashboard
                </Link>

                <button
                  onClick={() => {
                    handleLogout();
                    setProfileOpen(false);
                  }}
                  className="px-3 py-2 text-left hover:bg-gray-100 rounded"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <HighlightButton to="/signin" text="Sign In" />
        )}
      </div>

      {/* Mobile Toggle */}
      <div className="lg:hidden">
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
            className="absolute top-full left-0 w-full bg-white flex flex-col p-6 lg:hidden gap-5 text-lg font-bold shadow-lg border-t"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `
                  relative inline-flex items-center justify-center gap-[10px] p-[10px] transition duration-200
                  border-b-2 ${
                    isActive
                      ? "border-brand-blue text-brand-blue"
                      : "border-transparent hover:border-brand-blue hover:text-brand-blue"
                  }
                `
                }
              >
                {link.name}
              </NavLink>
            ))}

            {isloggedin ? (
              <>
                <NavLink
                  to="/dashboard"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `
                    relative inline-flex items-center justify-center gap-[10px] p-[10px] transition duration-200
                    border-b-2 ${
                      isActive
                        ? "border-brand-blue text-brand-blue"
                        : "border-transparent hover:border-brand-blue hover:text-brand-blue"
                    }
                  `
                  }
                >
                  Dashboard
                </NavLink>

                <button
                  onClick={handleLogout}
                  className="bg-brand-blue text-white font-bold py-2 px-4 rounded w-full text-left hover:bg-blue-700 transition-colors duration-200"
                >
                  Logout
                </button>
              </>
            ) : (
              <HighlightButton to="/signin" text="Sign In" />
            )}
          </motion.div>
        )}
      </AnimatePresence>

    </nav>
  );
}
