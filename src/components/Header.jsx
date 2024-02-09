import React, { Component } from "react";

import styles from "../styles/Header.module.css";

class Header extends Component {
  state = {};
  render() {
    return (
      <>
        <img
          className={styles.logo}
          src="the_simpsons.png"
          alt="The Simpsons"
        />
      </>
    );
  }
}

export default Header;
