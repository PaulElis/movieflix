import * as React from 'react';
import './index.css';
import { IMovie } from '../../App';

interface Props {
  movies: Array<IMovie>,
  sortMovies: Function;
}

interface State {
  value: string,
  reverse: boolean,
  options: Array<IOption>,
}

export interface IOption {
  name: string,
  value: string,
}

class Filter extends React.Component<Props, State>  {
  constructor(props: Props) {
    super(props)
      this.state = {
        value: '',
        reverse: false,
        options: [
          {
            name: 'Relevance',
            value: 'relevance',
          },
          {
            name: 'Title',
            value: 'title',
          },
          {
            name: 'Year',
            value: 'year',
          },
          {
            name: 'Rating',
            value: 'rating',
          },
          {
            name: '# of Reviews',
            value: 'reviews',
          },
        ]
      }; 
    this.handleChange = this.handleChange.bind(this); 
   };

  handleChange(event: React.ChangeEvent<HTMLSelectElement>): void {
    this.setState({value: event.target.value}, () => {
      this.props.sortMovies(this.props.movies, this.state.value)
    });
    // Reset state of reverse to False
  }

  render(): JSX.Element {
    // console.log(this.state)
    const {value, options} = this.state;
    return (
      <div  className="dropdown" >
        <select onChange={this.handleChange}>
          {options.map(item => (
            <option key={item.value} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default Filter;

