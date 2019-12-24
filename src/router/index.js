import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../components/home'
import Learn from '../components/learn'
import AsyncApp from '../containers/AsyncApp'

const routes = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/learn',
    component: Learn
  },
  {
    path: '/async',
    component: AsyncApp
  },
  {
    path: '/',
    component: Main,
    exact: true
  },
  {
    path: '*',
    component: NotFind
  }
]
export default function() {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to='/home'>to home</Link></li>
          <li><Link to='/learn'>to learn</Link></li>
          <li><Link to='/async'>to async</Link></li>
        </ul>
      </div>
      <Switch>
        {
          routes.map((route, index) => (
            <Route path={route.path} exact={route.exact} key={index}>
              <route.component />
            </Route>
          ))
        }
      </Switch>
    </Router>
  )
}

function Main() {
  return (
    <div>this is a main page.</div>
  )
}

function NotFind() {
  return (
    <div>404 not find.</div>
  )
}