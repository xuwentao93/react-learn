import React from 'react'
import { propsList } from '../home'

export default class Hello extends React.PureComponent {
  constructor(props, context) {
    super(props)
    this.state = {
      number: 1
    }
    console.log(context)
    this.addNumber = this.addNumber.bind(this)
  }
  addNumber() {
    this.setState({
      number: this.state.number + 1
    })
  }
  render() {
    if (this.state.number === 5) {
      throw new Error('well')
    }
    return (
      <div>
        <propsList.Consumer>
          {/* <div>123</div> */}
          {/* <div>{this.context.propsA}</div> */}
          {/* <div>{this.context.propsB}</div> */}
          {context => (
          <h1 style={{background: context.propsA, color: context.propsB}}>
            {this.props.children}
            {this.state.number}
            <button onClick={this.addNumber}>click me to add number</button>
          </h1>
        )}
        </propsList.Consumer>
      </div>
    )
  }
}