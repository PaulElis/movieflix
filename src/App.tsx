import * as React from 'react';
import './App.css';
import Search from '../src/components/Search/';
import MoviesList from './components/MoviesList/';
import searchMovie from './apis/movieDb';

export interface IMovie {
  title: string,
  poster_path: string,
  vote_count: number,
  vote_average: number,
  overview: string,
}

interface Props {
}

interface State {
  movies?: Array<IMovie>,
  query: string,
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      movies: [],
      query: '',
    }
  }

  searchMovie = searchMovie;

  componentDidMount = async () => {
    const result = await this.searchMovie('bean');
    this.setState({movies: result.results});
  }
  
  onSearchChange = async (event: React.SyntheticEvent<HTMLInputElement>) => {
    this.setState({ query: event.currentTarget.value });
    const result = await this.searchMovie(this.state.query);
    this.setState({movies: result.results});
  }

  render(): JSX.Element {
    return (
      <div className="App">
        <Search searchChange={this.onSearchChange} />
        <MoviesList movies={this.state.movies} />
      </div>
    );
  }
}

export default App;

