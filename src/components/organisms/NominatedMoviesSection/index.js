import React from 'react'
import { 
  NominatedMovie,
  Wrapper
} from 'components'

export const NominatedMoviesSection = ({
  movies,
  className
}) => {
  return (
    <Wrapper className={className}>
      <NominatedMovie movies={movies} />
    </Wrapper>
  )
}