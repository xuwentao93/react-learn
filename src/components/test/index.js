import React from 'react'
import { Prompt } from 'react-router-dom'

export default class Test extends React.PureComponent {
  constructor() {
    super()
    this.state = {
      value: '',
      hello: this
    }
    console.log(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  componentDidMount() {
    console.log(this === this.state.hello)
  }
  render() {
    return (
      <div className="test">
        <span>this is a test page, well{this.state.value}</span>
        <Prompt when={this.state.value.length > 0} message={(location) => `Are you sure yon want to go to ${location}?`} />
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </div>
    )
  }
}
