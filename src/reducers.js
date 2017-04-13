export function books(state=[], action) {
  switch (action.type) {
    case "ADD_BOOK":
      return [].concat(state, action.payload)
    case "REMOVE_BOOK":
      return [].concat(state.filter((b) => b !== action.payload))
    default:
      return state
  }
}

export function recommendedBooks(state=[], action) {
  switch (action.type) {
    case "ADD_RECOMMENDED_BOOK":
      return [].concat(state, action.payload)
    case "REMOVE_RECOMMENDED_BOOK":
      return [].concat(state.filter((b) => b !== action.payload))
    default:
      return state
  }
}

export function combineReducers(reducers){
  return (state = {}, action) => {
    return Object.keys(reducers).reduce(
      (nextState, key)=>{
        nextState[key] = reducers[key](state[key], action);
        return nextState
      }, {}
    )
  }
}
