import React, { Component } from "react";
import styles from "./Timer.module.css";
import LapsDisplay from "../LapsDisplay";
import ControlBlock from "../ControlBlock";

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
    if (this.state.statusWatch) {
      const { startNumber, laps } = this.state;
      this.setState({
        laps: [...laps, startNumber],
      });
    }
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
    const { startNumber, statusWatch, laps } = this.state;
    
    return (

      <div className={styles.bigContainer}>
        <section className={styles.sectionTimer}>
          <h1 className={styles.h1Timer}>{startNumber}</h1>
          <div className={styles.btnContainer}>
            <ControlBlock statusWatch = {statusWatch} startWatch={this.startWatch} stopWatch={this.stopWatch} resetWatch = {this.resetWatch} addLaps={this.addLaps} />
          </div>
        </section>
        <LapsDisplay lapsArray={laps} />
        </div>

    );
  }
}

export default StopWatch;
