import * as React from 'react';
import './App.css';
import Search from '../src/components/Search/index'

// export interface IMovie {
//   name: string;
// }

interface Props {
}

interface State {
  movies: Array<object>;
  query: string
}

class App extends React.Component<Props, State> {
  state = {
    movies: [],
    query: ''
  }

  searchMovie = (query: string) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=0b14c576a4de3d705e825b929cfb6181&language=en-US&query=${query}&page=1&include_adult=false`)
    .then(response=> response.json())
    .then(movies => { this.setState({movies: movies.results}) });
  }

  onSearchChange = (event: React.SyntheticEvent<HTMLInputElement>): void => {
    this.setState({ query: event.currentTarget.value })
    // this.searchMovie(this.state.query)
  }

  render() {
    console.log("Movies:", this.state.movies);
    console.log("Query:", this.state.query)
    
    return (
      <div className="App">
        <Search searchChange={this.onSearchChange} />
      </div>
    );
  }
}

export default App;
