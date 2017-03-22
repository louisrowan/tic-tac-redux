const React = require('react')
const Tile = require('./Tile')
const { connect } = require('react-redux')

const Gameboard = React.createClass({
  getIntialState(){
    return {
      turn: null
    }
  },
  handleClick(e){
    var index = e.target.id
    var tiles = this.state.tiles.slice(0)
    console.log(tiles, index, tiles[index])
    var tile = tiles[index]
    console.log(tiles)
    tile.style = Object.assign(tile.style, {background: 'blue'})
    // this.setState({ tiles })
  },
  render(){
    var { tiles } = this.props
    console.log(this.props)
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
  return {}
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Gameboard)