import React from 'react'
import Hello from '../child'
// import ReactDOM from 'react-dom'

export const propsList = React.createContext({
  propsA: '#f00',
  propsB: '#000'
})

export default class Home extends React.PureComponent {
  render() {
    return (
      <div>
        <propsList.Provider value={{propsA: '#49f', props: '#0f0'}}>
          <ThemeComponent />
        </propsList.Provider>
      </div>
    )
  }
}

function ThemeComponent() {
  return (
    <div>
      <Hello>123123</Hello>
      <Hello>567567</Hello>
    </div>
  )
}


// class Hello extends React.PureComponent {
//   static contextType = DefaultTheme
//   componentDidMount() {
//     const theme = this.refs.theme
//     console.log(theme.getAttribute('theme'))
//   }
//   render() {
//     return <div theme={this.context} ref='theme'>999</div>
//   }
// }

// const ThemeContext = React.createContext('light');

// export default class App extends React.Component {
//   render() {
//     // 使用一个 Provider 来将当前的 theme 传递给以下的组件树。
//     // 无论多深，任何组件都能读取这个值。
//     // 在这个例子中，我们将 “dark” 作为当前的值传递下去。
//     return (
//       <ThemeContext.Provider value="dark">
//         <Toolbar />
//       </ThemeContext.Provider>
//     );
//   }
// }

// // 中间的组件再也不必指明往下传递 theme 了。
// function Toolbar(props) {
//   return (
//     <div>
//       <ThemedButton />
//     </div>
//   );
// }

// class ThemedButton extends React.Component {
//   // 指定 contextType 读取当前的 theme context。
//   // React 会往上找到最近的 theme Provider，然后使用它的值。
//   // 在这个例子中，当前的 theme 值为 “dark”。
//   static contextType = ThemeContext;
//   render() {
//     return <button theme={this.context} />;
//   }
// }