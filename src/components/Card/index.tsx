import * as React from 'react';
import './index.css'
import alt from '../../images/alt.jpg'

interface CardStatelessProps {
  title: string,
  poster_path: string,
  vote_count: number,
  vote_average: number,
  overview: string
}

const Card: React.SFC<CardStatelessProps> = ({ title, poster_path, vote_count, vote_average, overview }) => {
  return (
    <div id='card-container'>
      <div id='card-inner-container'>
          <img 
              id='card-image' 
              alt={'oh no!'} 
              src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : alt} 
          />
          <div id='card-text'>
              <div id='card-title'>{title}</div>
              <div id='card-vote'>{vote_count !== 0 && vote_average !== 0 ? <div>{vote_average}/10 ({vote_count})</div> : <div>----------------</div> }</div>
              <textarea id='card-overview'>{overview}</textarea>
          </div>
      </div>
    </div>
  );
};

export default Card;