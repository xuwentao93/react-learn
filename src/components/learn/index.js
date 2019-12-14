import React from 'react'
import Child from '../child'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      hasError: false,
      errorInfo: null
     };
  }

  componentDidCatch(error, errorInfo) {
    // 你同样可以将错误日志上报给服务器
    this.setState({
      errorInfo
    })
  }

  render() {
    if (this.state.errorInfo) {
      // 你可以自定义降级后的 UI 并渲染
      return (
      <h1>
        <p>Something went wrong.</p>
        {this.state.errorInfo.componentStack}
      </h1>)
    }

    return (
    <div>12312312311
      <Child />
    </div> )
  }
}