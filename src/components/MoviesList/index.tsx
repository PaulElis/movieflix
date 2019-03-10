import * as React from 'react';
import './index.css'
import Card from '../Card/index';
import { IMovie } from '../../App'

const MoviesList = ({ movies }: {movies?: Array<IMovie>}) => {
    console.log('MoviesList:', movies)
  return (
      <div>
        <div id='card-container'>
            {movies && movies.length ? movies.map((movie, i) => { 
                return (
                <Card 
                    key={i} 
                    title={movie.title}
                    poster_path={movie.poster_path}
                    />
                )})
                : null}
        </div>
        {/* {movies && movies.length ? null : <div>No Movies to Show!</div>} */}
      </div>
  );
}

export default MoviesList;