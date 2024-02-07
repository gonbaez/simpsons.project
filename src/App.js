import React, { Component } from "react";

import axios from "axios";

import styles from "./styles/App.module.css";

class App extends Component {
  state = {};

  async componentDidMount() {
    const response = await axios.get(
      "https://thesimpsonsquoteapi.glitch.me/quotes?count=50"
    );

    console.log(response);
  }

  render() {
    return (
      <>
        <header>
          <img src="the_simpsons.png" alt="The Simpsons" />
        </header>
        <main>
          <section className={styles.simpsonsLogo}></section>
          <section className={styles.tvContainer}>
            <img src="static-noise.jpg" />
          </section>
        </main>

        <footer>
          <p>&copy; Gonzalo Baez 2024</p>
        </footer>
      </>
    );
  }
}

export default App;
