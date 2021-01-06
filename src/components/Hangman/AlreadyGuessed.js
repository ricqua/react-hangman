import React from "react";

function Keyboard({ guessedLetters }) {
  return (
    <React.Fragment>
      <div className="isGuessedletters">
        Already Guessed: {guessedLetters.toUpperCase()}
      </div>
    </React.Fragment>
  );
}

export default Keyboard;
