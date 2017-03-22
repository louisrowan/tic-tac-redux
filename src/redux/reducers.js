const { HANDLE_TILE_CLICK, HANDLE_SWITCH_TURN } = require('./actionCreators')

const DEFAULT_STATE = {
  tiles: [
    { value: null, style: ''},
    { value: null, style: ''},
    { value: null, style: ''},
    { value: null, style: ''},
    { value: null, style: ''},
    { value: null, style: ''},
    { value: null, style: ''},
    { value: null, style: ''},
    { value: null, style: ''},
  ],
  turn: true
}

function handleTileClick(state, action){
  const newTile = {}
  var style = state.turn ? 'blue' : 'red'
  var value = state.turn ? 'X' : 'O'
  Object.assign(newTile, {style: style}, {value: value})

  const newState = {}
  Object.assign(newState, state)

  newState.tiles = state.tiles.map((t, i) => {
    if (i.toString() === action.tile) {
      return newTile
    } else {
      return t
    }
  })
  return newState
}

function handleSwitchTurn(state, action){
  const newState = {}
  Object.assign(newState, state)
  newState.turn = newState.turn ? false : true
  return newState
}

export const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case HANDLE_TILE_CLICK:
      return handleTileClick(state, action)
    case HANDLE_SWITCH_TURN:
      return handleSwitchTurn(state, action)
    default:
      return state
  }
}