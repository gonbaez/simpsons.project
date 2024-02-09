import React, { Component } from "react";

import axios from "axios";
import LoadingComponent from "./LoadingComponent";
import Controls from "./Controls";
import Characters from "./Characters";

import styles from "../styles/Interface.module.css";

class Interface extends Component {
  state = {};

  getQuotes = async (character, count = 15) => {
    const response = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=${count}${
        character ? "&character=" + character : ""
      }`
    );

    response.data.map((el, idx) => {
      el.like = false;
      el.id = idx;
      el.deleteConfirm = false;
      return el;
    });

    this.setState({ data: response.data });
  };

  componentDidMount() {
    this.getQuotes();
  }

  onLike = (e) => {
    const data = this.state.data;
    const index = data.findIndex((el) => el.id === e);

    data[index].like = !data[index].like;

    this.setState({ data });
  };

  onDelete = (e) => {
    const data = this.state.data;
    const index = data.findIndex((el) => el.id === e);

    data[index].deleteConfirm = !data[index].deleteConfirm;

    this.setState({ data });

    setTimeout(() => {
      const data = this.state.data;
      const index = data.findIndex((el) => el.id === e);

      if (index === -1) return;

      data[index].deleteConfirm = !data[index].deleteConfirm;
      this.setState({ data });
    }, 3000);
  };

  onDeleteConfirm = (e) => {
    const data = this.state.data;
    const index = data.findIndex((el) => el.id === e);

    data.splice(index, 1);

    this.setState({ data });
  };

  onSearch = (e) => {
    this.setState({ filter: e.target.value });
  };

  render() {
    if (!this.state.data) {
      return <LoadingComponent />;
    }

    let data = this.state.data;

    if (this.state.filter) {
      data = data.filter((el) => {
        const name = el.character.toLowerCase();
        const filter = this.state.filter.toLowerCase();
        return name.includes(filter);
      });
    }

    const likes = data.filter((el) => el.like).length;

    return (
      <>
        <div className={styles.interface}>
          <Controls
            onSearch={this.onSearch}
            likes={likes}
            characters={data.length}
          />
          <Characters
            data={data}
            onLike={this.onLike}
            onDelete={this.onDelete}
            onDeleteConfirm={this.onDeleteConfirm}
          />
        </div>
      </>
    );
  }
}

export default Interface;
