import React, { Component } from "react";

import styles from "../styles/Characters.module.css";

import Character from "./Character";
import ScrollButtom from "./ScrollButton";

class Characters extends Component {
  render() {
    const { data, onLike, onDelete, onDeleteConfirm } = this.props;

    // element descomposition, how to include onLike function

    return (
      <>
        <ScrollButtom
          direction="left"
          scrollingElement={styles.characterList}
        />
        <ul className={styles.characterList}>
          <div className={styles.emptyListItem}></div>
          {data.map((element) => {
            return (
              <Character
                {...element}
                onLike={onLike}
                onDelete={onDelete}
                onDeleteConfirm={onDeleteConfirm}
              />
            );
          })}
          <div className={styles.emptyListItem}></div>
        </ul>
        <ScrollButtom
          direction="right"
          scrollingElement={styles.characterList}
        />
      </>
    );
  }
}

export default Characters;
