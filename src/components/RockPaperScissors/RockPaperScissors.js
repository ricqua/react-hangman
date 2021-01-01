import React, { useState, useEffect } from "react";
import "./rockPaperScissors.css";
import { images } from "./images/index.js";

function RockPaperScissors() {
  const [options, setOptions] = useState(["rock", "paper", "scissors"]);
  const [computer, setComputer] = useState("---");
  const [player, setPlayer] = useState("---");
  const [victoryStatus, setVictoryStatus] = useState("");
  const [score, setScore] = useState({ computerScore: 0, playerScore: 0 });

  function handleAttack(e) {
    setComputer(options[Math.floor(Math.random() * 3)]);
    setPlayer(e.target.id);
  }

  useEffect(() => {
    if (player === "") {
      setVictoryStatus("");
    } else if (player === computer) {
      setVictoryStatus("DRAW");
    } else if (
      (player === options[1] && computer === options[0]) ||
      (player === options[2] && computer === options[1]) ||
      (player === options[0] && computer === options[2])
    ) {
      setVictoryStatus("WINNER");
      setScore({ ...score, playerScore: score.playerScore + 1 });
    } else {
      setVictoryStatus("LOSER");
      setScore({ ...score, computerScore: score.computerScore + 1 });
    }
  }, [player, computer]);

  return (
    <React.Fragment>
      <div className="wrapper">
        <div className="main">
          <header className="headerComponent">
            <h1> Rock Paper Scissors</h1>
          </header>
          <div className="attackButtons">
            <img
              onClick={handleAttack}
              id={options[0]}
              src={images.images[0]}
              alt="rock"
              className="attackButton"
            />
            <img
              onClick={handleAttack}
              id={options[1]}
              src={images.images[1]}
              alt="paper"
              className="attackButton"
            />
            <img
              onClick={handleAttack}
              id={options[2]}
              src={images.images[2]}
              alt="scissors"
              className="attackButton"
            />
          </div>
          <section className="victoryArea">{victoryStatus}</section>
          <div className="resultsArea">
            <div className="playerSide">
              <h1 className="choice">{player}</h1>
              <h1 className="player">Player:</h1>
              <h1 className="score">{score.playerScore}</h1>
            </div>
            <div className="playerSide">
              <h1 className="choice">{computer}</h1>
              <h1 className="player">Computer:</h1>
              <h1 className="score">{score.computerScore}</h1>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default RockPaperScissors;
