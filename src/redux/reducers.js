const DEFAULT_STATE = {
  tiles: [
    { value: null, style: {}},
    { value: null, style: {}},
    { value: null, style: {}},
    { value: null, style: {}},
    { value: null, style: {}},
    { value: null, style: {}},
    { value: null, style: {}},
    { value: null, style: {}},
    { value: null, style: {}},
  ]
}

export const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}