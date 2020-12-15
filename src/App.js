import React from "react";
import Header from "./components/Header";
import Hangman from "./components/Hangman";

const App = () => {
  return (
    <React.Fragment>
      <div className="wrapper">
        {/* <Header /> */}
        <Hangman />
      </div>
    </React.Fragment>
  );
};

export default App;
