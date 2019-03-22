import * as React from 'react';
import './App.css';
import Search from '../src/components/Search/';
import Filter from '../src/components/Filter/';
import MoviesList from '../src/components/MoviesList/';
import searchMovie from './apis/movieDb';

export interface IMovie {
  title: string,
  release_date: string,
  poster_path: string,
  vote_average: number,
  vote_count: number,
  overview: string,
}

export interface ILoading {
  loading: boolean,
}

interface Props {
}

interface State {
  movies?: Array<IMovie>,
  query: string,
  loading: boolean
}

class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      movies: [],
      query: '',
      loading: false,
    }
  }

  searchMovie = searchMovie;

  componentDidMount = async () => {
    const result = await this.searchMovie('bean');
    this.setState({
      movies: result.results,
      loading: true,
    });
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
        <Filter />
        <MoviesList movies={this.state.movies} loading={this.state.loading} />
      </div>
    );
  }
}

export default App;

