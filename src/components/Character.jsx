import React, { Component } from "react";

import styles from "../styles/Character.module.css";
import LikeButton from "./LikeButton";
import DeleteButton from "./DeleteButton";

import { FaQuoteLeft } from "react-icons/fa6";
import { FaQuoteRight } from "react-icons/fa6";

class Character extends Component {
  state = {};

  render() {
    const {
      quote,
      image,
      character,
      characterDirection,
      onLike,
      like,
      id,
      onDelete,
      onDeleteConfirm,
      deleteConfirm,
    } = this.props;

    return (
      <li className={styles.characterListItem}>
        <div className={styles.characterContent}>
          <div className={styles.characterName}>{character}</div>
          <div className={styles.quote}>
            <FaQuoteLeft />
            {quote}
            <FaQuoteRight />
          </div>
          <div className={styles.characterFeedbackContainer}>
            <LikeButton onLike={onLike} like={like} id={id} />
            <DeleteButton
              onDelete={onDelete}
              onDeleteConfirm={onDeleteConfirm}
              deleteConfirm={deleteConfirm}
              id={id}
            />
          </div>
        </div>
        <div
          className={`${styles.imageContainer} ${
            styles[characterDirection.toLowerCase()]
          }`}
        >
          <img className={styles.characterImage} src={image} alt={character} />
        </div>
      </li>
    );
  }
}

export default Character;
