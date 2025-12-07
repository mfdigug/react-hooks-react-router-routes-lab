
function Directors({ directors }) {
  const directorsList = directors.map((director) => (
    <div key={director.name}>
      <h2>{director.name}</h2>
      <p>Movies:</p>
      <ul>
        {director.movies.map((movie) => (
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  ));

  return (
    <>
     <h1>Directors Page</h1>
     {directorsList}
    </>
  )
}

export default Directors;
