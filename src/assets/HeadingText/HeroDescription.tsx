import React, { useState, useRef, useLayoutEffect } from 'react'

interface Props {
  text: React.ReactNode
  size?: number // pixels
  className?: string
  no_of_lines?: number
  color?: string
}

const HeroDescription: React.FC<Props> = ({ text, size = 16, className, no_of_lines = 4, color }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isOverflowing, setIsOverflowing] = useState(false)
  const textRef = useRef<HTMLParagraphElement>(null)

  // Using a line-height of 1.5 for calculation, adjust if needed
  const lineHeight = 1.5
  const maxHeight = size * lineHeight * no_of_lines

  useLayoutEffect(() => {
    const element = textRef.current
    if (element) {
      // Check if the content is overflowing based on the calculated max-height
      if (element.scrollHeight > maxHeight) {
        setIsOverflowing(true)
      }
    }
  }, [text, maxHeight])

  const toggleIsExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    width: '100%',
  }

  const textStyle: React.CSSProperties = {
    color: color || 'var(--Grey-3, #4C4B4B)',
    fontFamily: 'Satoshi, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: `${size}px`,
    lineHeight: `${lineHeight}`,
    maxHeight: isExpanded ? 'none' : `${maxHeight}px`,
    overflow: 'hidden',
    transition: 'max-height 0.3s ease-in-out',
  }

  const readMoreContainerStyle: React.CSSProperties = {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '50%',
    textAlign: 'right',
    background: 'linear-gradient(to top, var(--color-white) 50%, transparent)',
    paddingTop: `${size}px`,
  }

  return (
    <div className={className} style={containerStyle}>
      <p ref={textRef} style={textStyle}>
        {text}
      </p>
      {!isExpanded && isOverflowing && (
        <div style={readMoreContainerStyle}>
          <button
            onClick={toggleIsExpanded}
            style={{
              color: 'var(--Blue, #007AFF)',
              fontFamily: 'Satoshi, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
              fontStyle: 'normal',
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
  )
}

export default HeroDescription
