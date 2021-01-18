import React from 'react'
import {
  Wrapper,
  Text
} from 'components'

export const NominatedMovie = ({movies}) => {
  return (
    <Wrapper className="nominated-movies">
      {movies &&
        movies.map(
          movie => (
            <Wrapper className="nominated-movie" key={movie.imdbID} >
              <Text type="h3">
                {movie.Title}
                <Text className="close-button" type="span">x</Text>
              </Text>
            </Wrapper>
          )
        )
      }
    </Wrapper>
  )
}