import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface AnimatedNavLinkProps {
  submit: () => void;
  text: string;
  /** background color for the button (css color). default: #fff */
  bgColor?: string;
  className?: string;
}

export default function AnimatedNavLink({ submit, text, bgColor, className=""}: AnimatedNavLinkProps) {
  const [hovered, setHovered] = useState(false);

  const buttonStyle: React.CSSProperties = {
    display: 'flex',
    height: 48,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    borderRadius: 8,
    background: bgColor || 'bg-white',
    border: bgColor ? 'none' : '1px solid var(--Grey-1, #4C4B4B)',
    cursor: 'pointer'
  }

  return (
    <div
      onClick={submit}
      className={`relative inline-flex overflow-hidden font-bold group text-lg w-full sm:w-auto ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={buttonStyle}
    >
      <AnimatePresence mode="wait">
        {!hovered ? (
          <motion.span
            key="default"
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="block text-center w-full"
          >
            {text}
          </motion.span>
        ) : (
          <motion.span
            key="hover"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="block text-center w-full"
          >
            {text}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}
