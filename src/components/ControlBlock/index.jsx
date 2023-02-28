import React, { Component } from "react";
import styles from "./Control.module.css";

class ControlBlock extends Component {
  startBtn = () => {
    const { startWatch } = this.props;
    startWatch();
  };

  stopBtn = () => {
    const { stopWatch } = this.props;
    stopWatch();
  };

  resetBtn = () => {
    const { resetWatch } = this.props;
    resetWatch();
  };

  lapsBtn = () => {
    const { addLaps } = this.props;
    addLaps();
  };

  render() {
    const { statusWatch } = this.props;
    return (
      <>
        <button
          className={`${statusWatch? styles.btnClickStop : styles.btnClick}`}
          onClick={statusWatch ? this.stopBtn : this.startBtn}
        >
          {statusWatch ? "Stop" : "Start"}
        </button>
        <button className={styles.btnClick} onClick={this.resetBtn}>
          Reset
        </button>
        <button className={styles.btnClick} onClick={this.lapsBtn}>
          Lap
        </button>
      </>
    );
  }
}

export default ControlBlock;
