// import React from 'react'
// import { render } from 'react-dom'
// import './index.css'
// import App from './router'
// import * as serviceWorker from './serviceWorker'
// // import { Provider } from 'react-redux'

// render(
//   // <Provider>
//     <App />,
//   // </Provider>,
//   document.getElementById('root'))

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister()

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './models/reducers'
import App from './components/App'

let store = createStore(todoApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)