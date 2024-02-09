import React, { Component } from "react";

import styles from "../styles/Footer.module.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <>
        <div className={styles.footerContainer}>
          <small>&copy; Gonzalo Baez 2024</small>
        </div>
      </>
    );
  }
}

export default Footer;
