const defaultState = {
    movies: null,
}
  
export default function(state=defaultState, action: any){
    switch(action.type){
        case "RUN_SEARCH":
        // console.log('payload: ', action.payload)
            return {movies: action.payload}
        default:
            return state
    }
}