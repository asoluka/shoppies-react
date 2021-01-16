import React from 'react'
import { Wrapper } from 'components'

export const MovieListingsSection = ({children}) => {
  return (
    <Wrapper className="row movie-listing-section">
      {children}
    </Wrapper>
  )
}