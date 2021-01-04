import React, { Component } from "react";

export default class Count extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  add = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  subtract = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    console.log(Count);
    return (
      <div>
        <h1> Hello from Count </h1>
        {this.state.count}
        <br />
        <br />
        <button onClick={this.add}>Add</button>
        <button onClick={this.subtract}>Subtract</button>
      </div>
    );
  }
}
