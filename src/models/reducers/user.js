const initialState = {
  user: '',
  useless: 'I\'m a useless value'
}

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'setUser':
      console.log('setUser invoke successfully!')
      return {
        ...state,
        user: action.user
      }
    case 'removeUser':
      console.log('removeUser invoke successfully!')
      return {
        ...state,
        user: ''
      }
    default:
      return state
  }
}

export default todos