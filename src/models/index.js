// import number from './reducers/number'
// import user from './reducers/user'
// import { createStore, combineReducers } from 'redux'

// const reducers = combineReducers({
//   number,
//   user
// })

// const store = createStore(reducers)

// export default store

import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from './reducers'

const loggerMiddleware = createLogger()

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware
    )
  )
}