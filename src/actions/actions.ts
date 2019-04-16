import * as dotenv from 'dotenv'
dotenv.config()
import { IMovie } from '../App';

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

export function sortMovies(movies: Array<IMovie>, filter: string){
    console.log('Redux filter: ', filter)

    // let sorted = movies.sort((a: any, b: any) => {
    //     return a.release_date.slice(0,4) - b.release_date.slice(0,4)
    // })

    let reverse = ''
    let sorted: Array<IMovie>

    switch (filter) {
        case 'title':
        // Fix for strings
            sorted = movies.sort((a: any, b: any) => {
                return a.title - b.title
            })
            break;
        case 'year':
            sorted = movies.sort((a: any, b: any) => {
                return b.release_date.slice(0,4) - a.release_date.slice(0,4)
            })
            break;
        case 'rating':
            sorted = movies.sort((a: any, b: any) => {
                return b.vote_average - a.vote_average
            })
            break;
        case 'reviews':
            sorted = movies.sort((a: any, b: any) => {
                return b.vote_count - a.vote_count
            })
            break;
        default:
          console.log('Sorry, no filter .');
    }

    // console.log('Redux before dispatch: ', sorted)
    return (dispatch: any) => {
        // console.log('Redux sorted: ', sorted)
        dispatch({type: "RUN_SEARCH", payload: sorted.slice()})
    }
}