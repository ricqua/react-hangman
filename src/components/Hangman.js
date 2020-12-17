import React, { useState } from "react";
import Header from "./Header";
import { words3 } from "../data";
import { hangingDudes, keyboardCharacters } from "../images/index";

const Hangman = () => {
  let isAnswer =
    words3.wordlist[Math.floor(Math.random() * words3.wordlist.length - 1)];
  let [livesLeft, setLivesLeft] = useState(0);
  let [isGuessedLetters, setGuessedLetters] = useState("");

  const handleGuess = (e) => {
    e.preventDefault();
    setLivesLeft(livesLeft + 1);

    let letter = document.querySelector("#" + e.target.id).id;

    setGuessedLetters(isGuessedLetters.concat(letter));
    // console.log(document.querySelector("#" + e.target.id));
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
      let letterCode = letter.charCodeAt(0) - 96;
      return (
        <div
          key={letter}
          id={letter}
          className="keyboardLetter"
          onClick={handleGuess}
        >
          {/* {letter.toUpperCase()} */}
          <img
            alt={"keyboardCharacters" + letterCode}
            src={keyboardCharacters.keyboardCharacters[letterCode]}
          />
        </div>
      );
    });

  const ResultArea = () => {
    // let wordStatus = isAnswer.split("");
    console.log(isAnswer.split(""));
    // .map((letter) =>
    //   isGuessedLetters.indexOf(letter) >= 0 ? letter : " _ "
    // );
    // .join("");
    // document.getElementById("wordboardArea").innerHTML = wordStatus;

    return (
      <div className="wordboardArea">
        {isAnswer.toUpperCase()}

        {/* <button onClick={handleReset}>Reset</button> */}
      </div>
    );
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
