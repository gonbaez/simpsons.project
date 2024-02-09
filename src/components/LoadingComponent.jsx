import React, { Component } from "react";

import styles from "../styles/LoadingComponent.module.css";

class LoadingComponent extends Component {
  state = {};
  render() {
    return (
      <div className={styles["lds-ellipsis"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
}

export default LoadingComponent;
