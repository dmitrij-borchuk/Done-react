import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import * as serviceWorker from './serviceWorker'
import AppWrapper from './AppWrapper'

const rootEl = document.getElementById('root')
ReactDOM.render(<AppWrapper />, rootEl)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

if ((module as any).hot) {
  ;(module as any).hot.accept('./AppWrapper', () => {
    const NextApp = require('./AppWrapper').default
    ReactDOM.render(<NextApp />, rootEl)
  })
}
