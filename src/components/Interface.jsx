import React, { Component } from "react";

import axios from "axios";
import LoadingComponent from "./LoadingComponent";
import Controls from "./Controls";
import Characters from "./Characters";

import styles from "../styles/Interface.module.css";
import characterStyles from "../styles/Character.module.css";

import offlineData from "../offlineData.json";

import { searchSchema } from "../functions/validationSchemas.js";

import Joi from "joi";

class Interface extends Component {
  state = {};

  getQuotes = async (count = 15) => {
    const response = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=${count}`
      // { timeout: 10000 }
    );

    if (!response.data.length) {
      console.log("Using offline data");
      response.data = offlineData;
    }

    response.data.map((el, idx) => {
      el.like = false;
      el.id = idx;
      el.deleteConfirm = false;
      return el;
    });

    this.setState({ data: response.data });
  };

  componentDidMount() {
    this.getQuotes(50);
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

  onSearch = async (e) => {
    const _joiInstance = Joi.object(searchSchema);

    try {
      await _joiInstance.validateAsync({ "Search string": e.target.value });
    } catch (e) {
      this.setState({ searchError: e.details[0].message });
      return;
    }

    this.setState({ filter: e.target.value, searchError: null });
  };

  onScroll = (e) => {
    const elem = document.querySelector(`.${e}`);
    const halfWidth = window.innerWidth / 2;

    Array.from(elem.children).forEach((el) => {
      if (el.nodeName === "LI") {
        const rect = el.getBoundingClientRect();

        el.classList.remove(characterStyles.center);
        if (Math.abs(rect.left + rect.width / 2 - halfWidth) < 50) {
          el.classList.add(characterStyles.center);
        }
      }
    });
  };

  onRefresh = () => {
    this.setState({ data: null });
    this.getQuotes(30);
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
            searchError={this.state.searchError}
          />
          <Characters
            data={data}
            onLike={this.onLike}
            onDelete={this.onDelete}
            onDeleteConfirm={this.onDeleteConfirm}
            onScroll={this.onScroll}
            onRefresh={this.onRefresh}
            nonFilteredDataLength={this.state.data.length}
          />
        </div>
      </>
    );
  }
}

export default Interface;
