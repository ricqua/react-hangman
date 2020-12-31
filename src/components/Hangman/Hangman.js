import React, { useState, useEffect } from "react";
import "./hangman.css";
import HeaderArea from "./Header";
import WhiteboardArea from "./WhiteboardArea";
import GuessedLetters from "./GuessedLetters";
import ResultArea from "./ResultArea";
import { words3 } from "./data";

const Hangman = () => {
  let [isLives, setLives] = useState(0);
  let [isGuessedLetters, setGuessedLetters] = useState("");
  let [isAnswer, setAnswer] = useState("");
  // let [isDisplayWord, setDisplayWord] = useState("");

  useEffect(() => {
    setAnswer(
      words3.wordlist[Math.floor(Math.random() * words3.wordlist.length - 1)]
    );
    // setAnswer("cats");
    // setDisplayWord(isAnswer);
  }, []);

  const handleGuess = (e) => {
    e.preventDefault();
    setGuessedLetters(isGuessedLetters.concat(e.target.id));
    e.target.disabled = true;

    if (isAnswer.indexOf(e.target.id) < 0) {
      setLives(isLives + 1);
    }
  };

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
              <WhiteboardArea isLives={isLives} />
            </div>
            <div className="mainRight">{keyboardLetters}</div>
          </div>
          <GuessedLetters isGuessedLetters={isGuessedLetters} />
        </div>
        <ResultArea targetWord={isAnswer} guessedLetters={isGuessedLetters} />
      </div>
    </React.Fragment>
  );
};

export default Hangman;
