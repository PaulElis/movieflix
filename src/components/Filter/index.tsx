import * as React from 'react';
import './index.css';

interface Props {
}

interface State {
  displayMenu: boolean,
}

class Filter extends React.Component<Props, State>  {
  constructor(props: Props) {
    super(props)
   
    this.state = {
          displayMenu: false,
        };
   
     this.showDropdownMenu = this.showDropdownMenu.bind(this);
     this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
   
   };


  // state = {
  //   displayMenu: false,
  // };

  showDropdownMenu(event: React.SyntheticEvent<HTMLDivElement>): void {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });
  }


  render(): JSX.Element {
    console.log(this.state.displayMenu)
    return (
      <div  className="dropdown" style = {{background:"#eeeeee", width:"100%"}} >
        <div className="button" onClick={this.showDropdownMenu}> Dropdown Menu </div>
          { this.state.displayMenu ? (
            <ul>
              <li><a className="active" href="#Create Page">Create Page</a></li>
              <li><a href="#Manage Pages">Manage Pages</a></li>
              <li><a href="#Create Ads">Create Ads</a></li>
            </ul>
            ): ( null )
          }
    </div>
    );
  }
}

export default Filter;

