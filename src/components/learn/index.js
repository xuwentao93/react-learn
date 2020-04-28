import React from 'react'
import { connect } from 'react-redux'
import { addNumber, reduceNumber } from '../../models/actions/number'
import { testAsync } from '../../models/actions/async'

const Learn = ({ number, meta, addNumber, reduceNumber, testAsync }) => {
  return (
    <>
      <div>{number.number}</div>
      <div>{meta.msg}</div>
      <button onClick={ addNumber }>+</button>
      <button onClick={ reduceNumber }>-</button>
      <button onClick={ () => testAsync('hello world') }>test async hello world</button>
    </>
  )
}

const getNumber = (state) => {
  console.log(state)
  const { number , meta } = state
  return { number, meta }
}

const setNumber = (dispatch) => {
  return {
    addNumber: () => dispatch(addNumber()),
    reduceNumber: () => dispatch(reduceNumber()),
    testAsync: (msg) => dispatch(testAsync(msg))
  }
}
export default connect(getNumber, setNumber)(Learn)