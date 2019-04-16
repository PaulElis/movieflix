import * as React from 'react';
import './App.css';
import Search from '../src/components/Search/';
import Filter from '../src/components/Filter/';
import MoviesList from '../src/components/MoviesList/';
import { connect } from 'react-redux'
import { searchMovie, sortMovies } from '../src/actions/actions'

export interface IMovie {
  title: string,
  release_date: string,
  poster_path: string,
  vote_average: number,
  vote_count: number,
  overview: string,
}

interface Props {
  searchMovie: Function,
  movies: Array<IMovie>,
  sortMovies: Function
}

interface State {
  movies: Array<IMovie>,
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

  componentDidMount = () => {
    this.props.searchMovie('terminator');
  }

  componentDidUpdate(prevProps :any) {
    console.log('Component Updated!')
    if (this.props.movies !== prevProps.movies) {
      this.setState({
        movies: this.props.movies,
        loading: true,
      });
    }
  }

  // sortMovies = (filter: string) => {
  //   // console.log('sortMovies: ', filter)
  //   let movies = this.state.movies
  //   const sorted = movies.sort((a: any, b: any) => {
  //     return a.release_date.slice(0,4) - b.release_date.slice(0,4)
  //   })
  //   this.setState({ movies: movies });
  // }

  onSearchChange = async (event: React.SyntheticEvent<HTMLInputElement>) => {
    this.setState({ query: event.currentTarget.value });
    const result = this.props.searchMovie(this.state.query);
  }

  render(): JSX.Element {
    console.log('movies: ', this.state.movies)
    return (
      <div className="App">
        <Search searchChange={this.onSearchChange} />
        <Filter sortMovies={this.props.sortMovies} {...this.props} />
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

export default (connect(mapStateToProps, {searchMovie, sortMovies}) (App));

