

function Actors({ actorsData }) {
  
  return(
    <div>
    <h1>Actors Page</h1>
    {actorsData && actorsData.map((actor) => (
    console.log(actor),
    <div key={actor.name}>
      <h2>{actor.name}</h2>
      <p>Movies:</p>
      <ul>
        {actor.movies.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  ))}
    </div>
  ) 
}

export default Actors;
