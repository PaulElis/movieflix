import * as React from 'react';
import './index.css';

interface Props {
  sortMovies: Function;
}

interface State {
  value: string,
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
      this.props.sortMovies(this.state.value)
    });
  }

  render(): JSX.Element {
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

