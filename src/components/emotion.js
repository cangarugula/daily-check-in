import React, {Component} from "react"

class Emotion extends Component {

  render(){
    return (
      <div>
        <h1>{this.props.match.params.emotion}</h1>
        <button onClick={()=> this.props.history.goBack()}>Back</button>
      </div>
    )
  }
}

export default Emotion
