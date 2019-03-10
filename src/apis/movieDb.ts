const searchMovie = async (query: string) => {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=0b14c576a4de3d705e825b929cfb6181&language=en-US&query=${query}&page=1&include_adult=false`
  const result = await fetch(url).then(response => response.json())
  return result
}

export default searchMovie;