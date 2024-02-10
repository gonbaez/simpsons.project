import React, { Component } from "react";

import { IoMdHeart } from "react-icons/io";
import { FaUser } from "react-icons/fa";

import styles from "../styles/Controls.module.css";

class Controls extends Component {
  state = {};
  render() {
    return (
      <>
        <div className={styles.controlsContainer}>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Search character"
            onInput={this.props.onSearch}
          />
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
