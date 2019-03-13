import React from "react";

class TwitterMessage extends React.Component {

  constructor() {
    super();
    this.state = {
      value: ''
    };
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  remChars = () => {
    return (140-this.state.value.length)
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <span> (Characters remaining: {this.remChars()})</span>
      </div>
    );
  }
}

export default TwitterMessage;
