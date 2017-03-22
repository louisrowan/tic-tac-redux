const React = require('react')

const Tile = (props) => <div id={props.id} className={'tile-div ' + props.style} />

module.exports = Tile