import * as React from 'react';
import './index.css';
import Card from '../Card/index';
import { IMovie } from '../../App';

const MoviesList = ({ movies }: {movies?: Array<IMovie>}) => {
  console.log('MoviesList:', movies)
  return (
      <div>
        <div id='moviesList-container'>
            {movies && movies.length ? movies.map((movie, key) => { 
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
                )})
              : null}
        </div>
          {movies === undefined || movies.length === 0 ?  
            <div id='moviesList-noMovies'>
              Your search did not have any matches.<br />
              <br />
              Suggestions: <br />
              <br />
              • Try different keywords.<br />
            </div> :
            null
          }
      </div>
  );
}

export default MoviesList;