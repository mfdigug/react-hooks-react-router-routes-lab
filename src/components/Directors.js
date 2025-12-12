
function Directors({ directorsData }) {

  return (
    <div>
     <h1>Directors Page</h1>
     {directorsData && directorsData.map((director) => (
      <div key={director.name}>
      <h2>{director.name}</h2>
      <p>Movies:</p>
      <ul>
        {director.movies.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  ))}
  </div>
  )
}

export default Directors;
