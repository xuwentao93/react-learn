import React from 'react'
// import { propsList } from '../home'

export default class extends React.PureComponent {
  render() {

    return (
      <div onClick={LocationReplace}>
        <article>I am a child component</article>
      </div>
    )
  }
}

function LocationReplace() {
  console.log(1)
  document.location.replace('/test')
}