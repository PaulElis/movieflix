import * as React from 'react';
import './App.css';
import Search from '../src/components/Search/index'
import MoviesList from './components/MoviesList/index'
// import searchMovie from '../src/api/moviedb'

export interface IMovie {
  title: string,
  poster_path: string,
  vote_count: number,
  vote_average: number,
  overview: string
}

interface Props {
}

interface State {
  movies: Array<IMovie>,
  query: string
}

class App extends React.Component<Props, State> {

   state = {
     movies: [],
     query: ''
   }

   searchMovie = (query: string) => {
    const URL = `https://api.themoviedb.org/3/search/movie?api_key=0b14c576a4de3d705e825b929cfb6181&language=en-US&query=${query}&page=1&include_adult=false`

    fetch(URL)
    .then(response => response.json())
    .then(movies => { this.setState({movies: movies.results}) });

  }

  componentDidMount = async () => {
    this.searchMovie('bean')
  }

  onSearchChange = (event: React.SyntheticEvent<HTMLInputElement>): void => {
    this.setState({ query: event.currentTarget.value })
    this.searchMovie(this.state.query)
  }

  render(): JSX.Element {
    // console.log("Movies:", this.state.movies);
    // console.log("Query:", this.state.query)
    return (
      <div className="App">
        <Search searchChange={this.onSearchChange} />
        <MoviesList movies={this.state.movies} />
      </div>
    );
  }
}

export default App;

