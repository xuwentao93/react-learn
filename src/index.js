// import React from 'react'
// import { render } from 'react-dom'
// import { Provider } from 'react-redux'
// import store from './models'
// import App from './router'
// import * as serviceWorker from './serviceWorker'

// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.querySelector('#root')
// )

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA

// serviceWorker.register()

import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import App from './router'
import { Provider } from 'react-redux'
import configureStore from './models'

let store = configureStore()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)