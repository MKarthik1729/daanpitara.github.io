import React, { useState, useRef, useLayoutEffect } from 'react';

interface Props {
  text: React.ReactNode;
  size?: number; // pixels
  className?: string;
  no_of_lines?: number;
  color?: string;
  component?: React.ElementType; // allows 'p', 'span', or custom components
}

const HeroDescription: React.FC<Props> = ({
  text,
  size = 16,
  className,
  no_of_lines = 4,
  color,
  component: Component = 'p',
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const textRef = useRef<HTMLElement>(null);

  const lineHeight = 1.5;
  const maxHeight = size * lineHeight * no_of_lines;

  useLayoutEffect(() => {
    const element = textRef.current;
    if (element && element.scrollHeight > maxHeight) {
      setIsOverflowing(true);
    }
  }, [text, maxHeight]);

  const toggleIsExpanded = () => setIsExpanded(!isExpanded);

  const containerStyle: React.CSSProperties = { position: 'relative', width: '100%' };

  const textStyle: React.CSSProperties = {
    color: color || '#4C4B4B',
    fontFamily: 'Satoshi, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: `${size}px`,
    lineHeight: `${lineHeight}`,
    maxHeight: isExpanded ? 'none' : `${maxHeight}px`,
    overflow: 'hidden',
    transition: 'max-height 0.3s ease-in-out',
  };

  const readMoreContainerStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '50%',
    textAlign: 'right',
    background: 'linear-gradient(to top, #fff 50%, transparent)',
    paddingTop: `${size}px`,
  };

  return (
    <div className={className} style={containerStyle}>
      <Component ref={textRef} style={textStyle}>
        {text}
      </Component>
      {!isExpanded && isOverflowing && (
        <div style={readMoreContainerStyle}>
          <button
            onClick={toggleIsExpanded}
            style={{
              color: '#007AFF',
              fontFamily: 'Satoshi, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
              fontWeight: 500,
              fontSize: `${size}px`,
              lineHeight: 'normal',
              background: 'none',
              border: 'none',
              padding: '0 4px',
              cursor: 'pointer',
            }}
          >
            ... Read More
          </button>
        </div>
      )}
    </div>
  );
};

export default HeroDescription;
