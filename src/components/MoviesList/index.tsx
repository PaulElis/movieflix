import * as React from 'react';
import './index.css'
import Card from '../Card/index';
import { IMovie } from '../../App'

const MoviesList = ({ movies }: {movies?: Array<IMovie>}) => {
  return (
      <div>
        <div id='movieslist-container'>
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
        {/* {movies && movies.length ? null : <div>No Movies to Show!</div>} */}
      </div>
  );
}

export default MoviesList;