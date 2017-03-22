const React = require('react')
const Tile = require('./Tile')
const { connect } = require('react-redux')
const { handleTileClick, handleSwitchTurn, handleCheckWinner, handlePlayAgain } = require('./redux/actionCreators')

const Gameboard = React.createClass({
  getInitialState(){
    return {
      moves: 0
    }
  },
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
    this.setState({ moves: this.state.moves + 1})
    this.props.dispatchHandleTileClick(index)
    this.props.dispatchHandleCheckWinner()
    this.props.dispatchHandleSwitchTurn()
  },
  playAgain(){
    this.props.dispatchHandlePlayAgain()
    this.setState({ moves : 0})
  },
  render(){
    var { tiles, turn, winner } = this.props
    var { moves } = this.state
    return (
      <div>
        {
          !winner && moves < 9 && turn &&
          <h1 style={{color: 'blue'}}>Player 1's turn</h1>
        }
        {
          !winner && moves < 9 && !turn &&
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
          moves >= 9 && !winner && 
          <h1>It's a tie!</h1>
        }
      <div id='gameboard-div' onClick={this.handleClick}>
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
        {
          (moves >= 9|| winner) &&
          <button onClick={this.playAgain}>Play again?</button>
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
    },
    dispatchHandlePlayAgain(){
      dispatch(handlePlayAgain())
    }
  }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Gameboard)