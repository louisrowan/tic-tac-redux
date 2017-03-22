const React = require('react')
const Tile = require('./Tile')

const Gameboard = React.createClass({
  render(){
    return (
      <div>
        <p>im a gameboard</p>
        <Tile />
        <Tile />
      </div>
    )
  }
})

module.exports = Gameboard