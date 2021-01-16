import React from 'react'
import { Text, Input } from 'components'

export const MovieSearchSection = () => {
  return (
    <>
      <Text className="title" type="h1">The Shoppies</Text>
      <Text className="hero">Movie awards for entrepreneurs</Text>
      <Input 
        name="search-term" 
        placeholder="Enter movie to search" 
        id="search-term" 
        className="input-control" />
    </>
  )
}