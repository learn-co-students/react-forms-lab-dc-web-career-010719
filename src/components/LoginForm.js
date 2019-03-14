import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = (e) => {

    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('hey')
  }

  render() {
    return (
      <form onSubmit={(this.state.password.length !== 0 && this.state.username.length !== 0) ? this.handleSubmit : (e) => e.preventDefault()}>
        <div>
          <label>
            Username
            <input value={this.state.username} onChange={this.handleChange} id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input value={this.state.password} onChange={this.handleChange} id="password" name="password" type="password" />
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
