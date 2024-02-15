import React, { Component } from "react";

import styles from "../styles/Characters.module.css";

import Character from "./Character";
import ScrollButtom from "./ScrollButton";

import { IoRefreshCircle } from "react-icons/io5";
import { LuSearchX } from "react-icons/lu";
import { FaSupple } from "react-icons/fa6";

class Characters extends Component {
  constructor() {
    super();

    this.myRef = React.createRef();
  }

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
          // scrollingElement={styles.characterList}
          scrollingElement={"ul"}
          scrollingRef={this.myRef}
        />
        <ul
          className={styles.characterList}
          onScroll={() => {
            // onScroll(styles.characterList);
            onScroll("ul");
          }}
          ref={this.myRef}
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
          // scrollingElement={styles.characterList}
          scrollingElement={"ul"}
          scrollingRef={this.myRef}
        />
      </>
    );
  }
}

export default Characters;
