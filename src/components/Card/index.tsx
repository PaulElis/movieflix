import * as React from 'react';
import './index.css'
import alt from '../../images/alt.jpg'

interface CardStatelessProps {
  title: object,
  poster_path: object
}

const Card: React.SFC<CardStatelessProps> = ({ title, poster_path }) => {
  return (
    <div>
        <img id='card-image' alt={'oh no!'} src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : alt} />
        <div id='card-text'>
            <div>{title}</div>
        </div>
    </div>
  );
};

export default Card;