import * as React from 'react';
import './index.css';

interface ISearchBoxProps {
  searchChange(event: React.SyntheticEvent<HTMLInputElement>): void;
}

const SearchBox = ({ searchChange }: ISearchBoxProps) => {
  return (
    <div id='search-form-container'>
      <input
        id='search'
        type='search'
        placeholder='Find a movie..'
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;