const React = require('react')

const Tile = (props) => (
  <div id={props.id} className={'tile-div ' + props.style}>
    <h2>{props.value}</h2>
  </div>
)

module.exports = Tile