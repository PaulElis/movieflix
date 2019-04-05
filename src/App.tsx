import * as React from 'react';
import './App.css';
import Search from '../src/components/Search/';
import Filter from '../src/components/Filter/';
import MoviesList from '../src/components/MoviesList/';
// import searchMovie from './apis/movieDb';
import { connect } from 'react-redux'
import { searchMovie } from '../src/actions/actions'

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
  searchMovie: Function
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

  // searchMovie = searchMovie;

  componentDidMount = async () => {
    const moviesResult = await this.props.searchMovie('terminator');
    this.setState({
      movies: moviesResult,
      loading: true,
    });
  }
  
  onSearchChange = async (event: React.SyntheticEvent<HTMLInputElement>) => {
    this.setState({ query: event.currentTarget.value });
    const result = this.props.searchMovie(this.state.query);
    this.setState({movies: result.results});
  }

  render(): JSX.Element {
    console.log('movies: ', this.state.movies)
    return (
      <div className="App">
        <Search searchChange={this.onSearchChange} />
        <Filter />
        <MoviesList movies={this.state.movies} loading={this.state.loading} />
      </div>
    );
  }
}

function mapStateToProps(state: any){
  return {
    movies: state.movies,
  }
}

export default (connect(mapStateToProps, {searchMovie}) (App));

