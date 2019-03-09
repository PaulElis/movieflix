import * as React from 'react';
import './App.css';
import Search from '../src/components/Search/index'
import MoviesList from './components/MoviesList/index'

export interface IMovies {
 title: object
}

interface Props {
}

interface State {
  movies?: Array<IMovies>;
  query: string
}

class App extends React.Component<Props, State> {
  state = {
    movies: [],
    query: ''
  }

  searchMovie = (query: string) => {
    // function handleErrors(response: any) {
    //   if (!response.ok) {
    //       throw Error(response.statusText);
    //   }
    //   return response;
    // }

    // fetch(`https://api.themoviedb.org/3/search/movie?api_key=0b14c576a4de3d705e825b929cfb6181&language=en-US&query=${query}&page=1&include_adult=false`)
    // .then(handleErrors)
    // .then(response => response.json())
    // .then(movies => { this.setState({movies: movies.results}) });
    // .try{(function(error: any): void {
    //     console.log(error);
    // })};
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=0b14c576a4de3d705e825b929cfb6181&language=en-US&query=${query}&page=1&include_adult=false`)
    .then(response => response.json())
    .then(movies => { this.setState({movies: movies.results}) });
  }

  componentDidMount = () => {
    this.searchMovie('bean')
  }

  onSearchChange = (event: React.SyntheticEvent<HTMLInputElement>): void => {
    this.setState({ query: event.currentTarget.value })
    this.searchMovie(this.state.query)
  }

  // renderMovies = (): any => {
  //   if(this.state.movies){
  //     return this.state.movies.map(movie => {
  //       <MoviesList />
  //     })
  //   }
  // }

  render(): JSX.Element {
    console.log("Movies:", this.state.movies);
    console.log("Query:", this.state.query)
    
    // const { movies } = this.state.movies;
    // const moviesList: Array<IMovies> = movies.map(movie =>{
    //   return movie;
    // })

    return (
      <div className="App">
        <Search searchChange={this.onSearchChange} />
        <MoviesList movies={this.state.movies} />
        {/* {this.renderMovies()} */}
        {/* {this.state.movies ? <MoviesList movies={moviesList} /> : null } */}
      </div>
    );
  }
}

export default App;
