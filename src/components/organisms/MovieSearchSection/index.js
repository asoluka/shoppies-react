import React from 'react'
import { Text, InputField, Input, Wrapper, Label } from 'components'

export const MovieSearchSection = () => {
  return (
    <Wrapper>
      <Wrapper>
        <Text className="title" type="h1">The Shoppies</Text>
        <Text className="hero">Movie awards for entrepreneurs</Text>
      </Wrapper>
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
            />
        </InputField>
      </Wrapper>
    </Wrapper>
  )
}