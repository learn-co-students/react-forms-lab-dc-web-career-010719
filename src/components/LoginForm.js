import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: "",
                  password: ""};
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  handleSubmit(event){
    event.preventDefault()

    let x = (this.state.username && this.state.password) ? this.props.onSubmit(this.state) : null


  }


  render() {
    return (
      <form onSubmit={(event)=>{this.handleSubmit(event)}}>
        <div>
          <label>
            Username
            <input onChange={(event)=>{this.handleChange(event)}} value ={this.state.username} id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={(event)=>{this.handleChange(event)}} value ={this.state.password} id="password" name="password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
