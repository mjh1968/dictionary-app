import React from "react";
import "./Meaning.css";
export default function Meaning(props) {
  return (
    <div className="Meanings">
      <h4>{props.meaning.partOfSpeech}</h4>
      <p> {props.meaning.definitions[0].definition} </p>
      <p> {props.meaning.definitions[0].example} </p>
    </div>
  );
}
