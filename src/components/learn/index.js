import React from 'react'
import { connect } from 'react-redux'
import { addNumber, reduceNumber } from '../../models/actions/number'

const Learn = ({ number, addNumber, reduceNumber }) => {
  return (
    <>
      <div>{number.number}</div>
      <button onClick={ addNumber }>+</button>
      <button onClick={ reduceNumber }>-</button>
    </>
  )
}

const getNumber = (state) => {
  const { number } = state
  return { number }
}

const setNumber = (dispatch) => {
  return {
    addNumber: () => dispatch(addNumber()),
    reduceNumber: () => dispatch(reduceNumber())
  }
}
export default connect(getNumber, setNumber)(Learn)