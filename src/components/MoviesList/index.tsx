import * as React from 'react';
import './index.css';
import Card from '../Card/index';
import { IMovie } from '../../App';

const MoviesList = ({ movies, loading }: {movies?: Array<IMovie>, loading: boolean}) => {

  const moviesRender = () => {
    if(movies && movies.length) { 
      return movies.map((movie, key) => { 
        const {title, release_date, poster_path, vote_average, vote_count, overview} = movie;
          return (
            <Card 
              key={key} 
              title={title}
              release_date={release_date}
              poster_path={poster_path}
              vote_average={vote_average}
              vote_count={vote_count}
              overview={overview}
            />
          )
      })
    } else if (movies === undefined || !movies.length && loading ) {
      return (
        <div className='fade-in' id='moviesList-noMovies'>
          Your search did not have any matches.<br />
          <br />
          Suggestions: <br />
          <br />
          • Try different keywords.<br />
        </div>
      )
    } else {
      return null
    }
  }

  const moviesContainer = () => {
    if(movies && movies.length === 1 ){
      return 'singlemoviesList-container'
    } else if(movies && movies.length){
      return 'moviesList-container'
    } else {
      return 'noMoviesList-container'
    } 
  }

  return (
    <div id={moviesContainer()}>
      {moviesRender()}
    </div>
  );
}

export default MoviesList;