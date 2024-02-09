import React, { Component } from "react";

import styles from "../styles/Character.module.css";
import LikeButton from "./LikeButton";
import DeleteButton from "./DeleteButton";

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
        <div
          className={`${styles.characterContent} ${
            styles[characterDirection.toLowerCase()]
          }`}
        >
          <p className={styles.characterName}>{character}</p>
          <div className={styles.quote}>{quote}</div>
          <div>
            <LikeButton onLike={onLike} like={like} id={id} />
            <DeleteButton
              onDelete={onDelete}
              onDeleteConfirm={onDeleteConfirm}
              deleteConfirm={deleteConfirm}
              id={id}
            />
          </div>
        </div>
        <img className={styles.characterImage} src={image} alt={character} />
      </li>
    );
  }
}

export default Character;
