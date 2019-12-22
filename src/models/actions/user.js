export const setUser = (user) => {
  return {
    type: 'setUser',
    user
  }
}

export const removeUser = () => {
  return {
    type: 'removeUser'
  }
}