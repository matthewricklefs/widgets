import React, { Component } from "react";

export default class Slider extends Component {
  constructor() {
    super();

    this.state = {
      red: 0,
      green: 0,
      blue: 0
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { red, green, blue } = this.state;
    return (
      <div>
        <div
          style={{
            height: 50,
            width: 100,
            backgroundColor: `rgb(${red}, ${green}, ${blue})`
          }}
        />
        <p> {`rgb(${red}, ${green}, ${blue})`} </p>

        <input
          type="range"
          name="red"
          min="0"
          max="255"
          value={red}
          onChange={this.handleChange}
        />

        <input
          type="range"
          name="green"
          min="0"
          max="255"
          value={green}
          onChange={this.handleChange}
        />

        <input
          type="range"
          name="blue"
          min="0"
          max="255"
          value={blue}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
