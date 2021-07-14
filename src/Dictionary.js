import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  let [word, setWord] = useState(null);
  let [results, setResults] = useState(null);

  function handleSearch(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    // return alert(`searchig for  ${word}`);
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
    axios.get(apiUrl).then(handleSearch);
  }
  function WordSearch(event) {
    setWord(event.target.value);
  }

  return (
    <div className="dictionary">
      <div className="Search">
        <h1>What word do you want to look up?</h1>
        <form className="searchForm" onSubmit={search}>
          <input type="text" onChange={WordSearch}></input>
        </form>
      </div>
      <Results results={results} />
    </div>
  );
}
