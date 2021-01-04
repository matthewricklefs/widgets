import React, { Component } from "react";

export default class ChangeColor extends Component {
  constructor() {
    super();
    this.state = {
      color: "Black"
    };
  }

  updateColor = (e) => {
    this.setState({
      color: e.target.value
    });
  };

  render() {
    const fontColor = {
      color: this.state.color
    };

    return (
      <div>
        <h1 style={fontColor}> Hello from Change Color </h1>

        <input
          onChange={this.updateColor}
          className="colorChanger"
          type="text"
        />
        <button onClick={this.updateColor}>Back to Default Color</button>
      </div>
    );
  }
}
