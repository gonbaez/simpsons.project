import React, { Component } from "react";

import styles from "../styles/Characters.module.css";

import Character from "./Character";
import ScrollButtom from "./ScrollButton";

import { IoRefreshCircle } from "react-icons/io5";
import { LuSearchX } from "react-icons/lu";

class Characters extends Component {
  render() {
    const {
      data,
      onLike,
      onDelete,
      onDeleteConfirm,
      onScroll,
      onRefresh,
      nonFilteredDataLength,
    } = this.props;

    // element descomposition, how to include onLike function

    if (!nonFilteredDataLength) {
      return (
        <>
          <IoRefreshCircle
            onClick={() => onRefresh()}
            className={styles.refreshButton}
          />
        </>
      );
    }

    if (!data.length) {
      return (
        <LuSearchX
          style={{ cursor: "initial" }}
          className={styles.refreshButton}
        />
      );
    }

    return (
      <>
        <ScrollButtom
          direction="left"
          scrollingElement={styles.characterList}
        />
        <ul
          className={styles.characterList}
          onScroll={() => {
            onScroll(styles.characterList);
          }}
        >
          <div className={styles.emptyListItem}></div>
          {data.map((element) => {
            return (
              <Character
                {...element}
                onLike={onLike}
                onDelete={onDelete}
                onDeleteConfirm={onDeleteConfirm}
                key={element.id}
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
