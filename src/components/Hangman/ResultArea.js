import React, { useState } from "react";

const ResultArea = (props) => {
  // let [isAnswer, setAnswer] = useState(props.targetWord);
  // let [isLastLetter, setLastLetter] = useState(props.guessedLetters);
  // let [isDisplay, setDisplay] = useState("isDisplay");
  // let lastLetter = props.guessedLetters[props.guessedLetters.length - 1];
  // let [isDisplay, setDisplay] = useState("");

  // if (props.targetWord) {
  //   console.log(props.targetWord);
  //   setDisplay(
  //     props.targetWord.split("").map(() => {
  //       return " _ ";
  //     })
  //   );
  // } else {
  //   console.log("No targetWord");
  // }

  // if (props.targetWord.indexOf(lastLetter) >= 0) {
  //   lastLetter = props.guessedLetters[props.guessedLetters.length - 1];
  //   setDisplay(
  //     props.targetWord.split("").map((x) => {
  //       if (props.targetWord.indexOf(x) >= 1) {
  //       }
  //     })
  //   );
  // }

  return (
    <React.Fragment>
      <div className="wordboardArea">{"isDisplay"}</div>
    </React.Fragment>
  );
};

export default ResultArea;
