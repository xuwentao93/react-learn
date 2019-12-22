const initialState = {
  number: 1,
  useless: 'I am a useless value'
}

const ChangeNumber = (state = initialState, action) => {
  switch (action.type) {
    case 'addNumber':
      console.log('addNumber invoked successfully!')
      return {
        ...state,
        number: initialState.number + 1
      }
    case 'reduceNumber':
      console.log('reduceNumber invoked successfully!')
      return {
        ...state,
        number: initialState.number - 1
      }
    default:
      return initialState
  }
}

export default ChangeNumber