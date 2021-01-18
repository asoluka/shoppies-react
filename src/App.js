import React, { useState, useEffect } from 'react'
import { 
  MovieSearchSection, 
  MovieListingsSection,
  MovieListing,
  NominatedMoviesSection,
  Wrapper,
  Text
} from 'components'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('Special')
  const [movies, setMovies] = useState(null)
  const [nominations, setNominations] =useState([])

  const handleSearch = (value) => setSearchTerm(value)
  const nominate = (movieData) => {
    setNominations([ ...nominations,
      movieData
    ])
  }

  useEffect(() => {
    // API Call.
    (async function fetchMovies() {
      const response = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=5bb9cee4`)
      const data = await response.json()
      const returnedMovies = data.Search
      setMovies(returnedMovies)
    })()
  }, [searchTerm])
  
  return (
    <div className="container">
      <Wrapper className="row">
        <Wrapper className="col-md-6">
          <Text className="title" type="h1">The Shoppies</Text>
          <Text className="hero">Movie awards for entrepreneurs</Text>
        </Wrapper>
        <NominatedMoviesSection className="col-md-6" movies={nominations} />
      </Wrapper>
      <MovieSearchSection onChange={handleSearch} searchTerm={searchTerm} />
      <MovieListingsSection movies={movies}>
        <MovieListing movies={movies} nominateMovie={nominate} />
      </MovieListingsSection>
    </div>
  );
};

export default App