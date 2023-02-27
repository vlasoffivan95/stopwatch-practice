import React, { Component } from "react";
import styles from './Timer.module.css'

const stateInitial = {
  startNumber: 0,
  statusWatch: false,
  laps: [],
};

class StopWatch extends Component {
  state = {
    ...stateInitial,
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
    const { statusWatch } = this.state;
    this.setState({ statusWatch: true });
  };

  stopWatch = () => {
    const { statusWatch } = this.state;
    this.setState((state) => ({
      statusWatch: false,
    }));
  };

  resetWatch = () => {
    this.setState({ ...stateInitial });
  };

  addLaps = () => {
    if(this.state.statusWatch) {
    const { startNumber, laps } = this.state;
    this.setState({
      laps: [...laps, startNumber],
      
    });
  }};

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
    const { startNumber, statusWatch, laps } = this.state;
    const lapsArray  = laps.map( (number, index=1) => <li key ={index + 1}> Laps#{index + 1} Time:{number}second </li>);
    return (
      <div>
        <h1>Timer</h1>
        <h2>{startNumber}</h2>
        <div className= {styles.btnContainer}>
        <button className={styles.btnClick} onClick={statusWatch ? this.stopWatch : this.startWatch}>
          {statusWatch ? "Stop" : "Start"}
        </button>
        <button className= {styles.btnClick}onClick={this.resetWatch}>Reset</button>
        <button className = {styles.btnClick} onClick={this.addLaps}>Lap</button>
        <ul>{lapsArray}</ul>
        </div>
      </div>
    );
  }
}

export default StopWatch;
