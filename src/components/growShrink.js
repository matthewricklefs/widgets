import React, { Component } from "react";

export default class GrowShrink extends Component {
  constructor() {
    super();

    this.state = {
      fontSize: 25
    };
  }

  sizeGrow = () => {
    this.setState({
      fontSize: this.state.fontSize + 10
    });
  };

  sizeShrink = () => {
    this.setState({
      fontSize: this.state.fontSize - 10
    });
  };

  render() {
    const h1Style = {
      fontSize: this.state.fontSize
    };
    return (
      <div>
        <h1 style={h1Style}> Grow & Shrink {this.state.fontSize + "px"} </h1>
        <br />

        <button onClick={this.sizeGrow}>Grow</button>
        <button onClick={this.sizeShrink}>Shrink</button>
      </div>
    );
  }
}
