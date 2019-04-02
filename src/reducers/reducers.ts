const defaultState = {
    query: '',
}
  
export default function(state=defaultState, action: any){
    switch(action.type){
        case "RUN_SEARCH":
        return {albums: action.payload}
        default:
        return state
    }
}