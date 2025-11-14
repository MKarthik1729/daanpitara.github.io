import React from 'react'

interface Props {
  heading: React.ReactNode
  size?: number // pixels
  className?: string
}

const HeroTitle: React.FC<Props> = ({ heading, size = 36, className }) => {
  return (
    <div className={`w-full ${className ? className : ''}`}>
      <h1
        style={{
          color: '#000',
          fontFamily: 'Satoshi, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: `${size}px`,
          lineHeight: 'normal'
        }}
        className="leading-tight"
      >
        {heading}
      </h1>
    </div>
  )
}

export default HeroTitle
