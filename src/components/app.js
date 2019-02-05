import React, { Component } from "react"
import Login from "./login"

class App extends Component {
  render(){
    return (
      <div>
        <h1>Welcome! You are a priority.</h1>
        <hr />
        <Login />
      </div>
    )
  }
}

export default App
