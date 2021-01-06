import React from "react";
import { hangingDudes } from "./images/index";

function Whiteboard({ lives }) {
  let imgSource = hangingDudes.hangingDudes[lives];
  return (
    <React.Fragment>
      <div className="whiteboardArea">
        <img className="livesPicture" alt="hangingDude" src={imgSource} />
      </div>
      );
    </React.Fragment>
  );
}

export default Whiteboard;
