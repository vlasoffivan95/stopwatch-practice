import React, { Component } from "react";

class StopWatch extends Component {
  state = {
    startNumber: 0,
    statusWatch: true,
  };

  startWatch = () => {
    const { startNumber, statusWatch } = this.state;
    this.setState((state)=> ({statusWatch:true}))
    if (statusWatch) {
      this.setState((state) => ({
        startNumber: state.startNumber + 1,
      }));
    }
  };

  stopWatch = () => {
    const { statusWatch } = this.state;
    this.setState((state) => ({
      statusWatch: !state.statusWatch,
    }));
  };

  componentDidMount() {
    this.timerID = setInterval(this.startWatch, 1000);
  }

  componentDidUpdate() {}

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    const { startNumber } = this.state;
    return (
      <div>
        <h1>Hello, world</h1>
        <h2>{startNumber}</h2>
        <button onClick={this.startWatch}>Start Watch</button>
        <button onClick={this.stopWatch}></button>
      </div>
    );
  }
}

export default StopWatch;
