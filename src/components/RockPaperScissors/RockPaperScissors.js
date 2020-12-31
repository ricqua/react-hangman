import React, { useState, useEffect } from "react";
import "./rockPaperScissors.css";

function computerAttack() {
  const x = Math.floor(Math.random() * 3);
  // console.log(x);
  return x;
}

function RockPaperScissors() {
  const [options, setOptions] = useState(["rock", "paper", "scissors"]);
  const [computer, setComputer] = useState(options[computerAttack()]);
  const [player, setPlayer] = useState("");
  const [victoryStatus, setVictoryStatus] = useState("");

  function handleAttack(e) {
    setPlayer(e.target.id);

    if (player === computer) {
      setVictoryStatus("DRAW");
      console.log(victoryStatus);
    } else if (
      (player === options[1] && computer === options[0]) ||
      (player === options[2] && computer === options[1]) ||
      (player === options[0] && computer === options[2])
    ) {
      setVictoryStatus("WINNER");
      console.log(victoryStatus);
    } else {
      setVictoryStatus("LOSER");
      console.log(victoryStatus);
    }
  }

  return (
    <React.Fragment>
      <h1> Rock Paper Scissors game</h1>
      <button onClick={handleAttack} id={options[0]}>
        {options[0]}
      </button>
      <button onClick={handleAttack} id={options[1]}>
        {options[1]}
      </button>
      <button onClick={handleAttack} id={options[2]}>
        {options[2]}
      </button>
      <h1>
        Player 1 chose {player}. Computer chose {computer}. {victoryStatus}
      </h1>
    </React.Fragment>
  );
}

export default RockPaperScissors;
