import React from "react";
import "./FontawesomeIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div className="headerComponent">
      <FontAwesomeIcon
        icon="bars"
        className="menuIcon"
        size="2x"
        color="white"
        cursor="pointer"
      />
      {/* <button>{Menu}</button> */}
      <h1>Hangman</h1>
      <FontAwesomeIcon
        icon="cog"
        className="menuIcon"
        size="2x"
        color="white"
        cursor="pointer"
      />
    </div>
  );
};

export default Header;

/* <i class="fas fa-ellipsis-v"></i> */
