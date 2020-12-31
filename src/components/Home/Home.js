import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <React.Fragment>
      <h1>Home page</h1>
      <Link to="/hangman">
        <button>Hangman</button>
      </Link>
      <Link to="/rockpaperscissors">
        <button>RockPaperScissors</button>
      </Link>
    </React.Fragment>
  );
}

export default Home;
