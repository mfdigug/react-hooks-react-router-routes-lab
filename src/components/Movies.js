
function Movies( { movies } ) {
 console.log(movies)
 
  const movieList = movies.map((movie) => {
   return(
    <div key={movie.title} >    
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

  return( 
  <>
    <h1>Movies</h1>
    {movieList}
  </>
  )
}

export default Movies;
