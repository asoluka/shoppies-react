import React from 'react'
import { Wrapper } from 'components'

export const MovieListingsSection = ({movies, children}) => {
  return (
    <Wrapper>
      {movies && (
        <Wrapper className="row movie-listing-section">
          {children}
        </Wrapper>
      )}
    </Wrapper>
  )
}