import React, { Component } from "react";

const heading = "Hello from Toggle";

export default class Toggle extends Component {
  constructor() {
    super();

    this.state = {
      heading: heading,
      isOpen: true
    };
    this.styles = {
      backgroundColor: "blue",
      fontSize: "5rem"
    };
  }
  toggleMe = () => {
    if (this.state.isOpen) {
      this.setState({
        heading: [],
        isOpen: false
      });
    } else {
      this.setState({
        heading: heading,
        isOpen: true
      });
    }
  };

  render() {
    return (
      <div>
        <h1 style={this.styles}>{this.state.heading}</h1>
        <br />
        <button onClick={this.toggleMe}>Toggle Me!</button>
      </div>
    );
  }
}
