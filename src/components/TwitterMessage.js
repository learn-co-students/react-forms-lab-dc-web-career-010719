import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      remainingChars : this.props.maxChars
    };
  }

  handleInputChange = event => {
    this.setState({
      input: event.target.value,
      remainingChars: this.props.maxChars - event.target.value.length
    })
    }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange = {this.handleInputChange} value = {this.state.input}/>
        <p>{this.state.remainingChars} characters remaining</p>
      </div>
    );
  }
}

export default TwitterMessage;
