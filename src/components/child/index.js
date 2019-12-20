import React from 'react'
import { propsList } from '../home'

export default class Hello extends React.PureComponent {
  constructor(props, context) {
    super(props)
    this.state = {
      number: 1
    }
    // console.log(context)
    this.ref = React.createRef()
    this.addNumber = this.addNumber.bind(this)
    
  }
  addNumber() {
    this.setState({
      number: this.state.number + 1
    })
  }
  componentDidMount() {
    this.ref.current.style.color = '#f00'
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
        <div ref={this.ref}>HELLO</div>
        <MouseTracker />
      </div>
    )
  }
}

// function Repeat(props) {
//   let items = [];
//   for (let i = 0; i < props.numTimes; i++) {
//     items.push(props.children(i));
//   }
//   return <div>{items}</div>;
// }

// function ListOfTenThings() {
//   return (
//     <Repeat numTimes={10}>
//       {(index) => <div key={index}>This is item {index} in the list</div>}
//     </Repeat>
//   );
// }

class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>

        {/*
          Instead of providing a static representation of what <Mouse> renders,
          use the `render` prop to dynamically determine what to render.
        */}
        {this.props.render(this.state)}
      </div>
    );
  }
}

class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <span style={{position: 'absolute', left: mouse.x, right: mouse.y}}>cat</span>
    );
  }
}

class MouseTracker extends React.Component {
  render() {
    return (
      <div>
        <h1>移动鼠标!</h1>
        <Mouse render={mouse => (
          <Cat mouse={mouse} />
        )}/>
      </div>
    );
  }
}