import React from "react";
// import "./FontawesomeIcons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeaderArea = () => {
  // const handleStartGame = () => {
  // window.location.reload(false);
  // setAnswer(
  //   words3.wordlist[Math.floor(Math.random() * words3.wordlist.length - 1)]
  // );
  //setLives(0);
  //setGuessedLetters("");
  // };

  return (
    <React.Fragment>
      <div className="headerComponent">
        {/* <FontAwesomeIcon
          icon="bars"
          className="menuIcon"
          size="2x"
          color="white"
          cursor="pointer"
        /> */}
        <h1>Hangman</h1>
        {/* <button
          onClick={() => {
            handleStartGame();
            // setAnswer(
            //   words3.wordlist[
            //     Math.floor(Math.random() * words3.wordlist.length - 1)
            //   ]
            // );
          }}
        >
          Start Game
        </button> */}
        {/* <FontAwesomeIcon
          icon="cog"
          className="menuIcon"
          size="2x"
          color="white"
          cursor="pointer"
        /> */}
      </div>
    </React.Fragment>
  );
};

export default HeaderArea;
