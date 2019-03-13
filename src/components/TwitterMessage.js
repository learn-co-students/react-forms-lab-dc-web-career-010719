import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: '',
      remainingChars: this.props.maxChars
    };
  }

  handleChange = e => {
    if (e.target.value.length <= this.props.maxChars) {
      this.setState({
        content: e.target.value,
        remainingChars: this.props.maxChars - e.target.value.length
      })
    } else {
      console.log("No more characters allowed")
    }

    console.log(this.state.content)
  }

  handleChar = e => {
    e.persist()

  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="content" value={this.state.content} onChange={this.handleChange} />
        <p>{this.state.remainingChars} Characters remaining</p>
      </div>
    );
  }
}

export default TwitterMessage;
