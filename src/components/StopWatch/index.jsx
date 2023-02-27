import React, { Component } from "react";

class StopWatch extends Component {
  state = {
    startNumber: 0,
    statusWatch: false,
  };

  startInterval = () => {
    const { startNumber, statusWatch } = this.state;
    if (statusWatch) {
      this.setState((state) => ({
        startNumber: state.startNumber + 1,
      }));
    }
  };

  startWatch = () => {
    const {statusWatch} = this.state;
    this.setState({statusWatch:true})
  }

  stopWatch = () => {
    const { statusWatch } = this.state;
    this.setState((state) => ({
      statusWatch: false,
    }));
  };

  componentDidMount() {
    this.timerID = setInterval(this.startInterval, 1000);
  }
  componentDidUpdate() {
    console.log("update");
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    console.log("willunmount");
  }

  render() {
    const { startNumber, statusWatch } = this.state;
    return (
      <div>
        <h1>Hello, world</h1>
        <h2>{startNumber}</h2>
        <button onClick={this.startWatch}>Start Watch</button>
        <button onClick={this.stopWatch}>Stop Watch</button>
      </div>
    );
  }
}

export default StopWatch;
