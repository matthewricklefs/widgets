import React, { Component } from "react";

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
  }
  // reset the date by updating the state of it
  tick() {
    this.setState({
      time: new Date()
    });
  }
  // when the component mounts you set a timerid and set the interval
  // to the tick method over 1000 milliseconds
  componentDidMount() {
    this.clockhand = setInterval(() => {
      this.tick();
    }, 1000);
  }
  // clear the the clock every time it is about to unmount and then rerender
  componentWillUnmount() {
    clearInterval(this.clockhand);
  }
  render() {
    return (
      <div>
        <h1> {this.state.time.toLocaleTimeString()}</h1>
      </div>
    );
  }
}
