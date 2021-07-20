import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [word, setWord] = useState(null);
  let [results, setResults] = useState(null);

  function handleSearch(response) {
    setResults(response.data[0]);
  }
  function handleSearchPhotos(response) {
    alert(`searchig for`);
    console.log(response);
  }
  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
    axios.get(apiUrl).then(handleSearch);
    let apiPhotosKey =
      "563492ad6f91700001000001f49cfa17380f4f3aa1ad13b578bb56ca";

    let apiUrlPhotos = `https://api.pexels.com/v1/search?query=${word}`;
    axios
      .get(apiUrlPhotos, {
        headers: { Authorization: `Bearer ${apiPhotosKey}` },
      })
      .then(handleSearchPhotos);
  }
  function WordSearch(event) {
    setWord(event.target.value);
  }

  return (
    <div className="dictionary">
      <div className="Search">
        <h2>What word do you want to look up?</h2>
        <form className="searchForm" onSubmit={search}>
          <input type="text" onChange={WordSearch}></input>
        </form>
      </div>
      <Results results={results} />
    </div>
  );
}
