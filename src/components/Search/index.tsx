import * as React from 'react';
import './index.css';

interface ISearchProps {
  searchChange(event: React.SyntheticEvent<HTMLInputElement>): void;
}

const Search = ({ searchChange }: ISearchProps) => {
  return (
    <div id='search-container'>
      <input
        id='search'
        type='search'
        placeholder='Find a movie..'
        onChange={searchChange}
      />
    </div>
  );
};

export default Search;