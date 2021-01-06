import React, { useState } from "react";
import "./hangman.css";
import HeaderArea from "./Header";
import { words3 } from "./dictionary";
import Whiteboard from "./Whiteboard";
import AlreadyGuessed from "./AlreadyGuessed";
import ResultsArea from "./ResultsArea";
import { useEffect } from "react/cjs/react.development";

function Hangman() {
  const [lives, setLives] = useState(0);
  const [guessedLetters, setGuessedLetters] = useState("");
  const [answer, setAnswer] = useState(
    words3.wordlist[Math.floor(Math.random() * words3.wordlist.length - 1)]
  );

  const handleGuess = (e) => {
    e.preventDefault();
    e.target.disabled = true;
    setGuessedLetters(guessedLetters.concat(e.target.id));
  };

  useEffect(() => {
    if (answer.indexOf(guessedLetters.slice(-1))) {
      setLives(lives + 1);
    }
  }, [guessedLetters]);

  const keyboardLetters = (
    <React.Fragment>
      <div className="keyboardArea">
        {"abcdefghijklmnopqrstuvwxyz".split("").map((letter) => {
          return (
            <button
              key={letter}
              id={letter}
              className="keyboardLetter"
              onClick={handleGuess}
            >
              {letter.toUpperCase()}
            </button>
          );
        })}
      </div>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <div className="wrapper">
        <div className="main">
          <HeaderArea />
          <div className="leftRight">
            <div className="mainLeft">
              <Whiteboard lives={lives} />
            </div>
            <div className="mainRight">{keyboardLetters}</div>
          </div>
          <AlreadyGuessed guessedLetters={guessedLetters} />
        </div>
        <ResultsArea answer={answer} guessedLetters={guessedLetters} />
      </div>
    </React.Fragment>
  );
}

export default Hangman;
