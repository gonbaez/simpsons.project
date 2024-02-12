import React, { Component } from "react";

import styles from "../styles/ScrollButton.module.css";

class ScrollButtom extends Component {
  state = { scrollingElementRef: null };

  componentDidMount() {
    const scrollingElementRef = document.querySelector(
      `.${this.props.scrollingElement}`
    );

    this.setState({ scrollingElementRef });
  }

  render() {
    const { direction } = this.props;

    return (
      <>
        <button
          onClick={() => {
            const { scrollingElementRef } = this.state;
            const viewWidth = window.innerWidth;
            const viewHeight = window.innerHeight;

            const middleElement = document.elementFromPoint(
              viewWidth / 2,
              viewHeight / 2
            );

            console.log(middleElement);
            const scrollDistance =
              direction === "left"
                ? -Math.min(viewWidth / 3, 500)
                : Math.min(viewWidth / 3, 500);
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
