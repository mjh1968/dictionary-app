import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [word, setWord] = useState(props.defaultword);
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState([]);
  const [loaded, setLoaded] = useState(false);

  function handleSearch(event) {
    event.preventDefault();
    search();
  }
  function handleSearchMeanings(response) {
    setResults(response.data[0]);
    let apiPhotosKey =
      "563492ad6f91700001000001f49cfa17380f4f3aa1ad13b578bb56ca";
    let apiUrlPhotos = `https://api.pexels.com/v1/search?query=${word}`;
    axios
      .get(apiUrlPhotos, {
        headers: { Authorization: `Bearer ${apiPhotosKey}` },
      })
      .then(handleSearchPhotos);
  }

  function handleSearchPhotos(response) {
    setPhotos(response.data.photos);
    console.log(response);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
    axios.get(apiUrl).then(handleSearchMeanings);
  }

  function handleWordChange(event) {
    setWord(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="dictionary">
        <div className="Search">
          <h2>What word do you want to look up?</h2>
          <form onSubmit={handleSearch} className="searchForm">
            <input
              type="text"
              autoFocus={true}
              defaultValue={props.defaultword}
              onChange={handleWordChange}
            ></input>
          </form>
        </div>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading!";
  }
}
