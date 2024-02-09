import React, { Component } from "react";

import styles from "../styles/ScrollButton.module.css";

class ScrollButtom extends Component {
  render() {
    const { direction, scrollingElement } = this.props;

    const scrollingElementRef = document.querySelector(`.${scrollingElement}`);
    const scrollDistance = direction === "left" ? -500 : 500;

    return (
      <>
        <button
          onClick={() => {
            scrollingElementRef.scrollLeft += scrollDistance;
          }}
          className={styles.scrollButton}
          style={direction === "left" ? { left: "10%" } : { right: "10%" }}
        >
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          >
            <polyline
              points={
                direction === "left" ? "15 18 9 12 15 6" : "9 18 15 12 9 6"
              }
            ></polyline>
          </svg>
        </button>
      </>
    );
  }
}

export default ScrollButtom;
