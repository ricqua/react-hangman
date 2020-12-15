import React, { useState } from "react";
import Header from "./Header";
import { words3 } from "../data";
// import ResultArea from "./ResultArea";
// import image from "./keyboardA.png";

const Hangman = () => {
  let [isAnswer, setAnswer] = useState();
  let [livesLeft, setLivesLeft] = useState(5);

  const handleStartGame = () => {
    const randomWord = Math.floor(Math.random() * words3.wordlist.length - 1);
    isAnswer = setAnswer(words3.wordlist[randomWord]);
  };

  const handleGuess = (e) => {
    e.preventDefault();
    livesLeft = setLivesLeft(livesLeft - 1);
    // isGuessed = setIsGuessed(getElementById(e.taget.key);
    console.log("clicked");
  };

  const handleReset = () => {
    // console.log("Reset");
    handleStartGame();
    livesLeft = setLivesLeft(5);
  };

  const keyboardLetters = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .map((letter) => {
      return (
        <div
          key={letter}
          id={letter}
          name={letter}
          className="keyboardLetter"
          onClick={handleGuess}
        >
          {letter.toUpperCase()}
        </div>
      );
    });

  const ResultArea = () => {
    if (isAnswer) {
      console.log(isAnswer);
      return (
        <div className="wordboardArea">
          {isAnswer.toUpperCase()}
          <button onClick={handleReset}>Reset</button>
        </div>
      );
    } else {
      return (
        <div className="startArea">
          <button onClick={handleStartGame}>Start Game</button>
        </div>
      );
    }
  };

  return (
    <React.Fragment>
      <div className="maintest">
        <Header />
        <div className="leftRight">
          <div className="testLeft">LEFT</div>
          <div className="testRight">RIGHT</div>
        </div>
        {/* <div className="whiteboardArea">
          {livesLeft > 0 ? livesLeft : "DEAD"}
        </div>
        <div className="keyboardArea">{keyboardLetters}</div> */}
      </div>
      <ResultArea />
    </React.Fragment>
  );
};

export default Hangman;
