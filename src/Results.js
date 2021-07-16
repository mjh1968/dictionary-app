import React, { useState } from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import Photos from "./Photos";

export default function Results(props) {
  console.log(props.results);
  const [photos, setPhotos] = useState([]);

  function handleImages(response) {
    setPhotos(response.data.photos);
  }

  if (props.results) {
    return (
      <div className="showResults">
        {/* <h2> {props.results.word}</h2> */}
        {props.results.phonetics.map(function (phonetic, index) {
          return <Phonetic phonetic={phonetic} key={index} />;
        })}
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
        <Photos photos={photos} />
      </div>
    );
  } else {
    return null;
  }
}
