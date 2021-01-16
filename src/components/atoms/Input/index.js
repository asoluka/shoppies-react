import React from 'react'

export const Input = ({
  name,
  id,
  className,
  placeholder,
  type,
  onChange,
  searchTerm
}) => {
  const handleSearchInput = (e) => onChange(e.target.value)
  
  return (
    <input 
      name={name} 
      id={id} 
      className={className} 
      placeholder={placeholder} 
      type={type}
      onChange={handleSearchInput}
      value={searchTerm} 
      />
  )
}