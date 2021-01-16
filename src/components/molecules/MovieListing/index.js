import React from 'react'
import {
  Text,
  Image,
  Wrapper,
  Button
} from 'components'

export const MovieListing = ({movies}) => {
  return (
    <Wrapper className="row">
      {movies &&
        movies.filter(item => item.Type == 'movie')
        .map((movie) => (
          <Wrapper className="col-md-3 movie-listing" key={movie.imdbID}>
            <Image key={movie.imdbID} className="poster" src={movie.Poster} alt={movie.Title}></Image>
            <Wrapper className="row">
              <Wrapper className="col-12">
                <Text 
                  className="movie-title"
                  title={movie.Title}
                >
                  {movie.Title.substring(0, 17)} 
                  <Text type="span" className="released-year">
                    {movie.Year}
                  </Text>
                </Text>
                <Button className="nominate">Nominate</Button>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        ))
      }
    </Wrapper>
  )
}