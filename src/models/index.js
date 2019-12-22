import number from './reducers/number'
import user from './reducers/user'
import { createStore, combineReducers } from 'redux'

const reducers = combineReducers({
  number,
  user
})

const store = createStore(reducers)

export default store