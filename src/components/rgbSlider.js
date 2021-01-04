import React, { Component } from "react";

export default class Slider extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <h1 onClick={this.state}>Hello from Slider</h1>
      </div>
    );
  }
}
