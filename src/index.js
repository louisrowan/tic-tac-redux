const React = require('react')
const ReactDOM = require('react-dom')
const App = require('./App')
const Store = require('./redux/store')
const { Provider } = require('react-redux')
require('./index.css')

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
