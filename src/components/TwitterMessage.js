import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweet: ''
    };
  }

  onChange = (event) => {
    this.setState({tweet: event.target.value})
  }



  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.tweet} onChange={this.onChange} />
        <strong>Chars left: {this.props.maxChars - this.state.tweet.length}</strong>
      </div>
    );
  }
}

export default TwitterMessage;
