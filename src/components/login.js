import React, {Component} from "react"

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: "",
      email: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render(){
    const { name, email } = this.state
    return (
      <div>
        <form>
          <label>Name</label>
          <input onChange={this.handleChange} id="name" value={name} />
          <label>Email</label>
          <input onChange={this.handleChange} id="email" value={email} />
        </form>
      </div>
    )
  }
}

export default Login
