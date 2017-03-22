const React = require('react')
const Gameboard = require('./Gameboard')

const App = React.createClass({
  render(){
    return (
      <div>
        <Gameboard />
      </div>
    )
  }
})

module.exports = App