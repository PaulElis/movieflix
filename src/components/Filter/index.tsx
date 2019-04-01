import * as React from 'react';
import './index.css';

interface Props {
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
            value: 'Relevance',
          },
          {
            name: 'Title',
            value: 'Title',
          },
          {
            name: 'Year',
            value: 'Year',
          },
          {
            name: 'Rating',
            value: 'Rating',
          },
          {
            name: '# of Reviews',
            value: '# of Reviews',
          },
        ]
      }; 
    this.sortBy = this.sortBy.bind(this); 
   };

  sortBy(event: React.ChangeEvent<HTMLSelectElement>): void {
    console.log('event: ', event.target.value)
    this.setState({value: event.target.value});
  }

  render(): JSX.Element {
    const {value, options} = this.state;
    return (
      <div  className="dropdown" >
        <select  onChange={this.sortBy}>
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

