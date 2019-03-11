import * as React from 'react';
import './index.css';
import Card from '../Card/index';
import { IMovie } from '../../App';

const MoviesList = ({ movies }: {movies?: Array<IMovie>}) => {

  console.log('MoviesList:', movies)

  const moviesRender = () => {
    if(movies && movies.length) { 
      return movies.map((movie, key) => { 
        const {title, poster_path, vote_count, vote_average, overview} = movie;
          return (
            <Card 
              key={key} 
              title={title}
              poster_path={poster_path}
              vote_count={vote_count}
              vote_average={vote_average}
              overview={overview}
            />
          )
      })
    } else if(movies === null){
      return null
    } else {
      return (
        <div className='fade-in' id='moviesList-noMovies'>
          Your search did not have any matches.<br />
          <br />
          Suggestions: <br />
          <br />
          • Try different keywords.<br />
        </div>
      )
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