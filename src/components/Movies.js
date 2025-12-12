

function Movies( { moviesData } ) {

  return( 
  <div>
    <h1>Movies Page</h1>
    {moviesData && moviesData.map((movie) => {
    return(
    <div key={movie.title}>    
      <h2>{movie.title}</h2>
      <p>Time: {movie.time} minutes </p>
      <p>Genres: </p>
      <ul>
        {movie.genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
   )
  })
  }
  </div>
  )
}

export default Movies;
