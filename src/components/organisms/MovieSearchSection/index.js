import React from 'react'
import { Text, InputField, Input, Wrapper, Label } from 'components'

export const MovieSearchSection = ({onChange, searchTerm, className}) => {
  const handleSearch = (value) => onChange(value)

  return (
    <Wrapper className={className}>
      <Wrapper className="movie-search-section">
        <InputField>
          <Label 
            htmlFor="search-term" 
            className="lb-search-term">
              Movie Title
          </Label>
          <Input
            name="search-term" 
            placeholder="Enter movie to search" 
            id="search-term" 
            className="input-control" 
            type="text"
            onChange={handleSearch}
            value={searchTerm}
            />
        </InputField>
      </Wrapper>
    </Wrapper>
  )
}