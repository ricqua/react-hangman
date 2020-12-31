import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Hangman from "./components/Hangman/Hangman";
import RockPaperScissors from "./components/RockPaperScissors/RockPaperScissors";

const App = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/hangman" component={Hangman} />
          <Route path="/rockpaperscissors" component={RockPaperScissors} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
