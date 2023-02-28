import React, { Component } from "react";
import styles from "./Laps.module.css";

class LapsDisplay extends Component {
  render() {
    const { lapsArray } = this.props;
    const lapsNewArray = lapsArray.map((number, index = 1) => (
      <li key={index + 1}>
        {" "}
        Laps#{index + 1} Time:{number}second{" "}
      </li>
    ));
    return <section className={styles.lapsStyle}><p className={styles.pLaps}>Laps</p>{lapsNewArray}</section>;
  }
}

export default LapsDisplay;
