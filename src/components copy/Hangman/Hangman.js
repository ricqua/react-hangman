import React, { useState, useEffect } from "react";
import "./hangman.css";
import HeaderArea from "./Header";
import WhiteboardArea from "./WhiteboardArea";
import GuessedLetters from "./GuessedLetters";
// import ResultArea from "./ResultArea";
import { words3 } from "./data";

const Hangman = () => {
  const [isLives, setLives] = useState(0);
  const [isGuessedLetters, setGuessedLetters] = useState("");
  const [isAnswer, setAnswer] = useState(
    words3.wordlist[Math.floor(Math.random() * words3.wordlist.length - 1)]
  );
  const [isDisplayWord, setDisplayWord] = useState(
    isAnswer.split("").map(() => {
      return " _ ";
    })
  );

  const handleGuess = (e) => {
    e.preventDefault();
    setGuessedLetters(isGuessedLetters.concat(e.target.id));
    e.target.disabled = true;
    if (isAnswer.indexOf(e.target.id) < 0) {
      setLives(isLives + 1);
    }
  };

  useEffect(() => {
    const lastLetter = isGuessedLetters[isGuessedLetters.length - 1];
    const letterIndex = isAnswer.indexOf(lastLetter);
    console.log(isAnswer);
    console.log(isDisplayWord.splice(letterIndex, 10, "help"));

    if (letterIndex >= 0) {
      // setDisplayWord((prevDisplayWord) => {
      //   return [...prevDisplayWord, (isDisplayWord[letterIndex], lastLetter)];

      //   // [(isDisplayWord[letterIndex] = lastLetter)];
      // });
      setDisplayWord(isDisplayWord.splice(letterIndex, 1, lastLetter));
    }
  }, [isGuessedLetters]);

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
        {/* <ResultArea targetWord={isAnswer} guessedLetters={isGuessedLetters} /> */}
        <div className="wordboardArea">{isDisplayWord}</div>
      </div>
    </React.Fragment>
  );
};

export default Hangman;
