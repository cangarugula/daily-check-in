import React, { Component } from "react"
import { Link } from "react-router-dom"
import MoodButton from "./moodButtons"

class Home extends Component {

  render() {
    const {emotions} = this.props
    return (
      <div>
        <h1>Welcome! You are a priority here.</h1>
        <h3>How are you feeing today?</h3>
        {
          emotions.map(emotion => <MoodButton key={emotion} emotion={emotion}/>)
        }
      </div>
    )
  }
}

export default Home
