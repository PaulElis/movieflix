import * as React from 'react';
import './index.css';

class Filter extends React.Component {

  render(): JSX.Element {
    return (
      <div id='filter-container'>
        <ul className="dd-list">
            <li className="dd-list-item">Item1</li>
            <li className="dd-list-item">Item2</li>
            <li className="dd-list-item">Item3</li>
        </ul>
      </div>
    );
  }
}

export default Filter;

