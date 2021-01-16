import React, {useState} from 'react'

export const Input = ({
  name,
  id,
  className,
  placeholder,
  type
}) => {
  const [searchTerm, setSearchTerm] = useState('')
  const handleSearchInput = (e) => setSearchTerm(e.target.value)
  
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