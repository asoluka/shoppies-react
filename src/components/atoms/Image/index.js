import React from 'react'

export const Image = ({
  alt,
  src,
  className
}) => {
  return (
    <img 
      className={className}
      src={src}
      alt={alt}
    />
  )
}