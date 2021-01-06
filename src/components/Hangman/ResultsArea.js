import React from "react";

function ResultsArea({ answer, guessedLetters }) {
  return (
    <React.Fragment>
      <div className="wordboardArea">
        {answer.split("").map((letter, i) => {
          return (
            <span className="displayLetter" key={i}>
              {guessedLetters.includes(letter) ? letter : " _ "}
            </span>
          );
        })}
      </div>
    </React.Fragment>
  );
}

export default ResultsArea;
