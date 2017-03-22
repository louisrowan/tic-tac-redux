export const HANDLE_TILE_CLICK = 'handle_tile_click'
export const HANDLE_SWITCH_TURN = 'handle_switch_turn'
export const HANDLE_CHECK_WINNER = 'handle_check_winner'

export function handleTileClick(tile) {
  return { type: HANDLE_TILE_CLICK, tile }
}

export function handleSwitchTurn(){
  return { type: HANDLE_SWITCH_TURN}
}

export function handleCheckWinner(){
  return { type: HANDLE_CHECK_WINNER}
}