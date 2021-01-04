import React, { Component } from "react";

const heading = "move-me";

export default class ChangePlacement extends Component {
  constructor() {
    super();
    this.state = {
      heading: heading,
      changePlacement: "center"
    };
  }

  moveLeft = () => {
    this.setState({
      changePlacement: "flex-start"
    });
  };

  moveCenter = () => {
    this.setState({
      changePlacement: "center"
    });
  };

  moveRight = () => {
    this.setState({
      changePlacement: "flex-end"
    });
  };

  render() {
    const firstDiv = {
      display: "flex",
      justifyContent: this.state.changePlacement,
      alignItems: "center"
    };

    return (
      <div>
        <h1 style={firstDiv}> {this.state.heading} </h1>
        <br />

        <button onClick={this.moveLeft}>Left</button>
        <button onClick={this.moveCenter}>Center</button>
        <button onClick={this.moveRight}>Right</button>

        <br />
      </div>
    );
  }
}
