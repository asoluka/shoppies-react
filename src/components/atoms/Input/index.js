import React from 'react'

export const Input = ({
  name,
  id,
  className,
  placeholder
}) => {
  return (
    <input 
      name={name} 
      id={id} 
      className={className} 
      placeholder={placeholder} />
  )
}