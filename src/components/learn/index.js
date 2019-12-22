import React from 'react'
import { connect } from 'react-redux'
import { addNumber, reduceNumber } from '../../models/actions/number'

function Learn({ dispatch }) {
  return (
    <>
      <div>12312a3</div>
      <button onClick={() => dispatch(addNumber())}>+</button>
      <button onClick={() => dispatch(reduceNumber())}>-</button>
    </>
  )
}

export default connect()(Learn)