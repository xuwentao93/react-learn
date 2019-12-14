import React from 'react'
import { propsList } from '../home'

export default class Hello extends React.PureComponent {
  constructor(props, context) {
    super()
    console.log(context)
  }
  render() {
    return (
      <div>
        <propsList.Consumer>
          {/* <div>123</div> */}
          {/* <div>{this.context.propsA}</div> */}
          {/* <div>{this.context.propsB}</div> */}
          {context => (
          <h1 style={{background: context.propsA, color: context.propsB}}>
            {this.props.children}
          </h1>
        )}
        </propsList.Consumer>
      </div>
    )
  }
}