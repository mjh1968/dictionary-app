import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meanings">
      <h4>{props.meaning.partOfSpeech}</h4>
      <p> {props.meaning.definitions[0].definition} </p>
      <p> {props.meaning.definitions[0].example} </p>
    </div>
  );
}
