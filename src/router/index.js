import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom'
import React from 'react'
import Test from '../components/test'
import Home from '../components/home'
import Learn from '../components/learn'

const config = ['test', 'home', 'learn']
// function ListComponents() {
//   return (

//   )
// }

function ChildComponents() { // react minify 有问题, 暂时无法这样引入.
  const ListComponents = config.map((item) =>
  <div key={item}>
    <Link to={`/${item}`}>page will go to {item} </Link>
    <br/>
  </div>
  )
  return (
    <div>
     {ListComponents}
    </div>
  )
}

export default class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <Redirect to="/home" />
        <div className="app">
          <span>app</span>
          <ChildComponents />
          <Switch>
            <Route path="/test">
              <Test />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/learn">
              <Learn />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}