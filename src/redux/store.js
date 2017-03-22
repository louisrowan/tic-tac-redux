const { createStore } = require('redux')
const { rootReducer } = require('./reducers')

const Store = createStore(rootReducer)

module.exports = Store