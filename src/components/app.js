import React, { Component } from "react"
import { Route } from "react-router-dom"
import Home from "./home"
import Emotion from './emotion'

const emotions = ["Sad", "Happy", "Anxious", "Angry", "Content" ]

class App extends Component {
  render(){
    return (
      <div>
        <Route exact path="/" render={() => <Home emotions={emotions} />}></Route>
        <Route path="/:emotion" render={({match, history}) => <Emotion match={match} history={history}/>}></Route>
      </div>
    )
  }
}

export default App
