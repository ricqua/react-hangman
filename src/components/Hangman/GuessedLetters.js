import React from "react";

const GuessedLetters = (props) => {
  return (
    <React.Fragment>
      <p className="isGuessedletters">
        Already Guessed: {props.isGuessedLetters.toUpperCase()}
      </p>
    </React.Fragment>
  );
};

export default GuessedLetters;
