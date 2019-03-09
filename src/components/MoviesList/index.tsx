import * as React from 'react';
// import Card from './Card';
import { IMovies } from '../../App'

const MoviesList = ({ movies }: {movies?: Array<IMovies>}) => {
    console.log('MoviesList:', movies)
  return (
    <div>
        MoviesList:
        {movies ? movies.map((movie, i) => { return <div>{movie.title}</div> })
            : <div>No Movies to Show!</div>}
    </div>
  );
}

export default MoviesList;