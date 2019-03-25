import * as React from 'react';
import './index.css';

class Filter extends React.Component {

  state = {
    displayMenu: false,
  };

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
    return (
      <div  className="dropdown" style = {{background:"red",width:"200px"}} >
        <div className="button" onClick={this.showDropdownMenu}> My Setting </div>
          { this.state.displayMenu ? (
            <ul>
              <li><a className="active" href="#Create Page">Create Page</a></li>
              <li><a href="#Manage Pages">Manage Pages</a></li>
              <li><a href="#Create Ads">Create Ads</a></li>
              <li><a href="#Manage Ads">Manage Ads</a></li>
              <li><a href="#Activity Logs">Activity Logs</a></li>
              <li><a href="#Setting">Setting</a></li>
              <li><a href="#Log Out">Log Out</a></li>
            </ul>
            ): ( null )
          }
    </div>
    );
  }
}

export default Filter;

