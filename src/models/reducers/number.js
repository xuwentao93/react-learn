const initialState = {
  number: 1,
  useless: 'I am a useless value'
}

const ChangeNumber = (state = initialState, action) => {
  switch (action.type) {
    case 'addNumber':
      return {
        ...state,
        number: state.number + 1
      }
    case 'reduceNumber':
      return {
        ...state,
        number: state.number - 1
      }
    default:
      return state
  }
}

export default ChangeNumber