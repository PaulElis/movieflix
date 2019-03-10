const searchMovie = (query) => {
  // const URL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.MOVIEDB_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  const URL = `https://api.themoviedb.org/3/search/movie?api_key=0b14c576a4de3d705e825b929cfb6181&language=en-US&query=${query}&page=1&include_adult=false`

  fetch(URL)
  .then(response => response.json())
  // .then(movies => { this.setState({movies: movies.results}) });
}

export default searchMovie;
