import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    this.state = {charLeft: props.maxChars, value: ""};
  }

  handleChange= (e)=>{
    this.setState({charLeft: (this.props.maxChars - e.target.value.length ),
                  value: e.target.value})
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleChange} type="text" />
        {this.state.charLeft} Characters Left
      </div>
    );
  }
}

export default TwitterMessage;
