import React from "react"
import { render } from "react-dom"
import { HashRouter as Router } from 'react-router-dom'
import App from "./components/app"
import store from './store'
import {Provider} from 'react-redux'

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
, document.getElementById('app'))
