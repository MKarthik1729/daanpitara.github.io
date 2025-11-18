// import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { useState } from "react";
import SubmitButton from "./SubmitButton";

interface AnimatedNavLinkProps {
  to?: string;
  text: string;
  /** background color for the button (hex / css variable). default: #fff */
  bgColor?: string;
  className?: string;
}

export default function AnimatedNavLink({ to, text, bgColor, className=""}: AnimatedNavLinkProps) {
  // const [hovered, setHovered] = useState(false);

  // const buttonStyle: React.CSSProperties = {
  //   display: 'flex',
  //   height: 48,
  //   padding: 10,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   gap: 10,
  //   borderRadius: 8,
  //   background: bgColor || 'bg-white',
  //   border: bgColor ? 'none' : '1px solid var(--Grey-1, #4C4B4B)'
  // }

  return (
    <SubmitButton
      submit={to || "#"}
      text={text}
      bgColor={bgColor }
      className={className}
    />
  )
}
