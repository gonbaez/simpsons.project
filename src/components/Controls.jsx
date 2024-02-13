import React, { Component } from "react";

import { IoMdHeart } from "react-icons/io";
import { FaUser } from "react-icons/fa";

import styles from "../styles/Controls.module.css";
// import classNames from "classnames";

class Controls extends Component {
  render() {
    const classNames = require("classnames");

    return (
      <>
        <div className={styles.controlsContainer}>
          <div style={{ position: "relative" }}>
            <input
              className={classNames(
                styles.searchInput,
                this.props.searchError ? styles.error : ""
              )}
              type="text"
              placeholder="Search character"
              onInput={this.props.onSearch}
            />
            <span className={styles.errorMessage}>
              {this.props.searchError}
            </span>
          </div>
          <div className={styles.counterContainer}>
            <div className={styles.likesContainer}>
              <IoMdHeart /> <span>{this.props.likes}</span>
            </div>
            <div className={styles.characterContainer}>
              <FaUser /> <span>{this.props.characters}</span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Controls;
