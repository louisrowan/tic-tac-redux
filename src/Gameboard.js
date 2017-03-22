const React = require('react')
const Tile = require('./Tile')
const { connect } = require('react-redux')
const { handleTileClick, handleSwitchTurn } = require('./redux/actionCreators')

const Gameboard = React.createClass({
  handleClick(e){
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
    this.props.dispatchHandleSwitchTurn()
  },
  render(){
    var { tiles } = this.props
    return (
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
    )
  }
})

const mapStateToProps = (state) => {
  return {
    tiles: state.tiles
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchHandleTileClick(tile) {
      dispatch(handleTileClick(tile))
    },
    dispatchHandleSwitchTurn(){
      dispatch(handleSwitchTurn())
    }
  }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Gameboard)