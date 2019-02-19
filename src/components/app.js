import React, { Component } from "react"
import { Route } from "react-router-dom"

class App extends Component {
  render(){
    return (
      <div>
        <div>
          <Route exact path="/" ></Route>
        </div>
        <div>
          <h1 className="title" >My App</h1>
        </div>
      </div>
    )
  }
}

export default App
