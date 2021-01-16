import React, { useState, useEffect } from 'react'
import { MovieSearchSection, Text } from 'components'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('Special')
  const [movies, setMovies] = useState(null)

  const handleSearch = (value) => setSearchTerm(value)
  
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
      <MovieSearchSection onChange={handleSearch} searchTerm={searchTerm} />
      {
        movies && movies
          .map((a) => <Text key={a.imdbID}>{a.Title}</Text>)
      }
    </div>
  );
};

export default App