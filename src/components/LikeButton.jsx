import React, { Component } from "react";

import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdHeart } from "react-icons/io";

import styles from "../styles/LikeButton.module.css";

class LikeButton extends Component {
  render() {
    return (
      <>
        <button
          onClick={() => this.props.onLike(this.props.id)}
          className={styles.likeButton}
        >
          {this.props.like ? <IoMdHeart /> : <IoMdHeartEmpty />}
        </button>
      </>
    );
  }
}

export default LikeButton;
