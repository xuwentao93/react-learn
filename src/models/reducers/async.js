import { SETDATA } from '../actions/async' 


const initialState = {
  msg: '',
  number: 1,
  a: {
    hello: 1
  }
}

export function meta(state = initialState, action) {
  switch (action.type) {
    case SETDATA:
      return {
        ...state,
        msg: action.msg
      }
    default:
      return state
  }
}
