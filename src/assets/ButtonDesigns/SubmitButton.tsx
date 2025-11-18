
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface AnimatedNavLinkProps {
  submit: string | (() => void);
  text: string;
  /** background color for the button (css color). default: #fff */
  bgColor?: string;
  className?: string;
}

export default function AnimatedNavLink({ submit, text, bgColor, className=""}: AnimatedNavLinkProps) {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle: React.CSSProperties = {
    display: 'flex',
    height: 48,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    borderRadius: 8,
    background: isHovered ? '#0F71A8' : (bgColor || 'var(--color-white)'),
    color: isHovered ? '#fff' : undefined,
    border: isHovered ? 'none' : bgColor ? 'none' : '1px solid var(--Grey-1, #4C4B4B)',
    cursor: 'pointer'
  }

  return (
    <div
      onClick={typeof submit=="string" ? () => { navigate(submit as string) } : submit}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative inline-flex font-bold text-lg w-full sm:w-auto ${className}`}
      style={buttonStyle}
    >
      <span className="block text-center w-full">
        {text}
      </span>
    </div>
  );
}
