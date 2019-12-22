import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../components/home'
import Learn from '../components/learn'

export default function() {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to='/home'>to home</Link></li>
          <li><Link to='/learn'>to learn</Link></li>
        </ul>
      </div>
      <Switch>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/learn'>
          <Learn />
        </Route>
      </Switch>
    </Router>
  )
}
