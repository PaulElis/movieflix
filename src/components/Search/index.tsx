import * as React from 'react';
import './index.css';

interface ISearchBoxProps {
  searchChange(event: React.SyntheticEvent<HTMLInputElement>): void;
}

const SearchBox = ({ searchChange }: ISearchBoxProps) => {
  return (
    <div id='search-form-container'>
      <input
        type='search'
        placeholder='Find a movie..'
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;

// export interface IMovie {
//   name: string;
// }

// interface Props {
// }

// interface State {
//   query: string;
// }

// class Search extends React.Component<Props, State> {
//     state = {
//         query: ''
//     }

//     handleChange = (event: any) => void{
//         // console.log(event)
//         // this.setState({ query: event.target,value });
//     }

//     search = (event: any) => void{
//         // event.preventDefault()
//         // this.props.runSearch(this.state.query)
//         // .then(() => {
//         //     this.props.fetchFullArtistInfo(this.props.albums[0].artist.name)
//         //     .then(() => this.props.addOneArtist(this.props.full_artist_info))
//         //     .then(() => this.props.albums.map(album =>
//         //     this.props.addAlbums(album, this.props.full_artist_info)))
//         //     .then(() => this.props.history.push('/albums'),
//         //     this.setState({ query: '' }))
//         //     }, reasonForError => {
//         //     console.log('searchError:', reasonForError);
//         // })
//     }

//   render() {
    
//     return (
//       <div className="Search">
//         <form id='search-form-container' onSubmit={this.search} >
//           <input
//             id='search-box'
//             type="text"
//             name='search'
//             // value={this.state.query}
//             onChange={this.handleChange}
//             placeholder='Find a movie..' />
//           <button id='search-button' type="submit">
//             {/* <img id='search-image' alt='oh no!' src={search} /> */}
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// export default Search;
