import React, { useState } from "react";
import Header from "./Header";
import { words3 } from "../data";
import hangingDudes from "../images/index";
// import "./FontawesomeIcons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hangman = () => {
  let [isAnswer, setAnswer] = useState("");
  let [livesLeft, setLivesLeft] = useState(0);
  let [isGuessedLetters, setGuessedLetters] = useState("");

  const handleStartGame = () => {
    setAnswer(
      words3.wordlist[Math.floor(Math.random() * words3.wordlist.length - 1)]
    );
  };

  const handleGuess = (e) => {
    e.preventDefault();
    setLivesLeft(livesLeft + 1);

    let letter = document.querySelector("#" + e.target.id).id;

    setGuessedLetters(isGuessedLetters.concat(letter));
    console.log(document.querySelector("#" + e.target.id));
    // document.querySelector("keyboarda").disabled = true;
    document
      .querySelector("#" + e.target.id)
      .setAttribute("class", "keyboardLetterDis");
  };

  // const handleReset = () => {
  //   handleStartGame();
  //   setLivesLeft(0);
  // };

  const keyboardLetters = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .map((letter) => {
      return (
        <div
          key={letter}
          id={letter}
          className="keyboardLetter"
          onClick={handleGuess}
        >
          {letter.toUpperCase()}
        </div>
      );
    });

  const ResultArea = () => {
    if (isAnswer) {
      return (
        <div className="wordboardArea">
          {isAnswer.toUpperCase()}
          {/* <button onClick={handleReset}>Reset</button> */}
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
                "STAAAP..."
              )}
            </div>
          </div>
          <div className="testRight">
            <div className="keyboardArea">{keyboardLetters}</div>
          </div>
        </div>
      </div>
      <ResultArea />
    </React.Fragment>
  );
};

export default Hangman;
