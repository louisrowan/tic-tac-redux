const {
  HANDLE_TILE_CLICK,
  HANDLE_SWITCH_TURN,
  HANDLE_CHECK_WINNER
} = require('./actionCreators')

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
  turn: true,
  winner: false
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

function handleCheckWinner(state, action){
  console.log('in check winner', state)
  var tiles = state.tiles
  var winner;

  var row1 = (tiles[0].style !== '') && (tiles[0].style === tiles[1].style) && (tiles[1].style === tiles[2].style)
  var row2 = (tiles[3].style !== '') && (tiles[3].style === tiles[4].style) && (tiles[4].style === tiles[5].style)
  var row3 = (tiles[6].style !== '') && (tiles[6].style === tiles[7].style) && (tiles[7].style === tiles[8].style)

  var col1 = (tiles[0].style !== '') && (tiles[0].style === tiles[3].style) && (tiles[3].style === tiles[6].style)
  var col2 = (tiles[1].style !== '') && (tiles[1].style === tiles[4].style) && (tiles[4].style === tiles[7].style)
  var col3 = (tiles[2].style !== '') && (tiles[2].style === tiles[5].style) && (tiles[5].style === tiles[8].style)

  var diag1 = (tiles[0].style !== '') && (tiles[0].style === tiles[4].style) && (tiles[4].style === tiles[8].style)
  var diag2 = (tiles[2].style !== '') && (tiles[2].style === tiles[4].style) && (tiles[4].style === tiles[6].style)

  if (row1 || row2 || row3 || col1 || col2 || col3 || diag1 || diag2){
    winner = true
  } else {
    winner = false
  }

  const newState = {}
  Object.assign(newState, state, { winner })
  console.log(newState.winner)
  return newState
}

export const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case HANDLE_TILE_CLICK:
      return handleTileClick(state, action)
    case HANDLE_SWITCH_TURN:
      return handleSwitchTurn(state, action)
    case HANDLE_CHECK_WINNER:
      return handleCheckWinner(state, action)
    default:
      return state
  }
}