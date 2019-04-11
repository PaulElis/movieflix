import * as dotenv from 'dotenv'
dotenv.config()

export function searchMovie(query: string){
    const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    return (dispatch: any) => {
        return fetch(url)
        .then(response => response.json())
        .then((movies) => {
            dispatch({type: "RUN_SEARCH", payload: movies.results})
        })
    }
  }

// export function fetchTopArtists(){
//     const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
//     const URL = 'https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists' + API_KEY
//     return (dispatch: any) => {
//         return fetch(URL)
//         .then(res => res.json())
//         .then(artists => {
//             // const artistNames = artists.artists.artist.map((artist) => artist.name)
//             // console.log('in fetchArtists', artists.artists.artist);
//             dispatch({type: "FETCH_TOP_ARTISTS", payload: artists.artists.artist})
//         })
//     }
// }