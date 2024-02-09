import React, { Component } from "react";

import { IoMdHeart } from "react-icons/io";
import { FaUser } from "react-icons/fa";

import styles from "../styles/Controls.module.css";

class Controls extends Component {
  state = {};
  render() {
    return (
      <>
        <div>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Search character"
            onInput={this.props.onSearch}
          />
          <div>
            <IoMdHeart /> {this.props.likes}
            <FaUser /> {this.props.characters}
          </div>
        </div>
      </>
    );
  }
}

export default Controls;
