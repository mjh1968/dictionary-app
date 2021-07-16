import React from "react";
import "./Phonetic.css";
export default function Phonetic(props) {
  if (props.phonetic) {
    return (
      <div className="Phonetics">
        {" "}
        <audio
          controls
          src={props.phonetic.audio}
          target="_blank"
          rel="noreferrer"
        ></audio>{" "}
        <span className="text">({props.phonetic.text})</span>
      </div>
    );
  } else {
    return null;
  }
}
