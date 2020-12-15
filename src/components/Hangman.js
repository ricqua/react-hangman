import React, { useState, useEffect } from "react";
import Header from "./Header";
import { words3 } from "../data";
import hangingDudes from "../images/index";
import "./FontawesomeIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hangman = () => {
  let [isAnswer, setAnswer] = useState();
  let [livesLeft, setLivesLeft] = useState(0);

  const handleStartGame = () => {
    const randomWord = Math.floor(Math.random() * words3.wordlist.length - 1);
    isAnswer = setAnswer(words3.wordlist[randomWord]);
  };

  const handleGuess = (e) => {
    e.preventDefault();
    livesLeft = setLivesLeft(livesLeft + 1);
    // isGuessed = setIsGuessed(getElementById(e.taget.key);
    console.log("clicked");
  };

  const handleReset = () => {
    // console.log("Reset");
    handleStartGame();
    livesLeft = setLivesLeft(10);
  };

  useEffect(() => {
    console.log("useEffect");
  });

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
          <FontAwesomeIcon
            icon="chevronRight"
            className="menuIcon"
            size="2x"
            cursor="pointer"
          />
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
          <div className="testLeft">
            <div className="whiteboardArea">
              {livesLeft < 11 ? (
                <img
                  className="livesPicture"
                  alt="hangingDude"
                  src={hangingDudes.hangingDudes[`${livesLeft}`]}
                />
              ) : (
                "DEAD"
              )}
              {/* {livesLeft > 0 ? livesLeft : "DEAD"} */}
            </div>
          </div>
          <div className="testRight">
            <div className="keyboardArea">{keyboardLetters}</div>
          </div>
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
