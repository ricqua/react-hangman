import React from "react";
import { hangingDudes } from "./images/index";

const WhiteboardArea = (props) => {
  return (
    <React.Fragment>
      <div className="whiteboardArea">
        {props.isLives < 11 ? (
          <img
            className="livesPicture"
            alt="hangingDude"
            src={hangingDudes.hangingDudes[`${props.isLives}`]}
          />
        ) : (
          <h1> "STAAAP"</h1>
        )}
      </div>
    </React.Fragment>
  );
};

export default WhiteboardArea;
