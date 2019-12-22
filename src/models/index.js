// import { createStore } from 'redux'

// const stateInitial = {
//   number: 0,
//   hello: 'hello',
//   change: 'I don\'t want to be changed'
// }

// function setNumber(state = stateInitial, action) {
//   switch (action.type) {
//     case 'increase':
//       console.log(state.number + 1)
//       return {
//         ...state,
//         number: state.number + 1
//       }
//     case 'reduce':
//       console.log(state.number - 1)
//       return {
//         ...state,
//         number: state.number - 1
//       }
//     default:
//       console.log('error type! you didn\'t change anything!')
//       return state
//   }
// }

// export const store = createStore(setNumber)

import number from './reducers/number'
import user from './reducers/user'
import { createStore, combineReducers } from 'redux'

const reducers = combineReducers({
  number,
  user
})

const store = createStore(reducers)

export default store