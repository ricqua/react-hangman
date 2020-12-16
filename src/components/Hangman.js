import React, { useState } from "react";
import Header from "./Header";
import { words3 } from "../data";
import hangingDudes from "../images/index";
// import "./FontawesomeIcons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hangman = () => {
  let [isAnswer, setAnswer] = useState();
  let [livesLeft, setLivesLeft] = useState(0);
  let [isGuessedLetters, setGuessedLetters] = useState([]);

  const handleStartGame = () => {
    const randomWord = Math.floor(Math.random() * words3.wordlist.length - 1);
    isAnswer = setAnswer(words3.wordlist[randomWord]);
  };

  const handleGuess = (e) => {
    e.preventDefault();
    livesLeft = setLivesLeft(livesLeft + 1);
    isGuessedLetters = setGuessedLetters(...isGuessedLetters);
    // isGuessed = setIsGuessed(getElementById(e.taget.key);
    console.log("clicked");
  };

  const handleReset = () => {
    // console.log("Reset");
    handleStartGame();
    livesLeft = setLivesLeft(0);
  };

  // useEffect(() => {
  //   console.log("useEffect");
  // });

  const keyboardLetters = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .map((letter) => {
      // console.log(letter);
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
          {/* <FontAwesomeIcon icon="chevronright" size="2x" cursor="pointer" /> */}
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

  // const updateHangmanPicture = () => {
  //   console.log(livesLeft);
  //   document.getElementById("hangingDude").src =
  //     "../images/hangingDude" + livesLeft + ".png";
  //   // return;
  // };

  return (
    <React.Fragment>
      <div className="maintest">
        <Header />
        <div className="leftRight">
          <div className="testLeft">
            <div className="whiteboardArea">
              {/* <img id="hangingDude" alt=""></img> */}
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
