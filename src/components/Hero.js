import React from 'react'

export const Hero = ({ highlight, subTitle, title, children }) => {
  return (
    <header className="hero">
      {subTitle && (
        <div className="sub-title">
          {highlight && <span className="highlight">{highlight}</span>}
          {subTitle}
        </div>
      )}
      {title && <h1>{title}</h1>}
      {children && children}
    </header>
  )
}
