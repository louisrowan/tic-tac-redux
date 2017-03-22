const React = require('react')
const Tile = require('./Tile')
const { connect } = require('react-redux')
const { handleTileClick, handleSwitchTurn, handleCheckWinner } = require('./redux/actionCreators')

const Gameboard = React.createClass({
  handleClick(e){
    if (this.props.winner) return
    var index = e.target.id
    var tile = this.props.tiles[index]
    switch (tile.value){
      case null:
        return this.handleAcceptClick(index)
      default:
        return
    }
  },
  handleAcceptClick(index){
    this.props.dispatchHandleTileClick(index)
    this.props.dispatchHandleCheckWinner()
    this.props.dispatchHandleSwitchTurn()
  },
  render(){
    var { tiles, turn, winner } = this.props
    return (
      <div id='gameboard-div' onClick={this.handleClick}>
        {
          !winner && turn &&
          <h1 style={{color: 'blue'}}>Player 1's turn</h1>
        }
        {
          !winner && !turn &&
          <h1 style={{color: 'red'}}>Player 2's turn</h1>
        }
        {
          winner && turn &&
          <h1>Player 2 wins!</h1>
        }
        {
          winner && !turn &&
          <h1>Player 1 wins!</h1>
        }

        {
          tiles &&
          tiles.map((t, i) => {
            return <Tile
              value={t.value}
              style={t.style}
              key={i}
              id={i}
              />
          })
        }
    </div>
    )
  }
})

const mapStateToProps = (state) => {
  return {
    tiles: state.tiles,
    turn: state.turn,
    winner: state.winner
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchHandleTileClick(tile) {
      dispatch(handleTileClick(tile))
    },
    dispatchHandleSwitchTurn(){
      dispatch(handleSwitchTurn())
    },
    dispatchHandleCheckWinner(){
      dispatch(handleCheckWinner())
    }
  }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Gameboard)