import React from 'react'
// import { Prompt } from 'react-router-dom'

function Child(props) {
  return (
    <div>
      <input ref={props.inputRef} />
    </div>
  );
}

const FancyButton = React.forwardRef((props, ref) => {
  return ( 
    <input ref={ref} className="FancyButton" 
      onClick={() => console.log(ref)} placeholder='happy coding' />
  )
});

// 你可以直接获取 DOM button 的 ref：
const ref = React.createRef();
const fancyButton = <FancyButton ref={ref}></FancyButton>;

function logProps(WrappedComponent) {
  class LogProps extends React.Component {
    componentDidUpdate(prevProps) {
      console.log('old props:', prevProps);
      console.log('new props:', this.props);
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return LogProps;
}

const newFancyButton = logProps(fancyButton) 

export default class Parent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      textInputRef: ''
    }
  }
  componentDidMount() {
    console.log(this.textInputRef)
    this.$textInputRef.style.color = '#49f'
    // ref.current.style.backgroundColor = '#f00'
    console.log(ref)
  }

  render() {
    return (
      <>
        <Child inputRef={el => this.$textInputRef = el} />
        {newFancyButton}
      </>
    );
  }
}
