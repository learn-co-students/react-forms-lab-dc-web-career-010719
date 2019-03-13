import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      username: '',
      password: ''
    };
  }

  handleFieldChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmission = (event) => {
    event.preventDefault()
    let obj = {
      username: this.state.username,
      password: this.state.password
    }
    if (obj.username === '' || obj.password === '') {
      window.alert('Please enter information into both fields.')
    } else {
      this.props.onSubmit(obj)
    }
  }

  render() {
    return (
      <form onSubmit={this.onSubmission}>
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.handleFieldChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleFieldChange}
            />
          </label>
        </div>
        <div>
          <button
            type="submit"
          >
            Log in
          </button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
