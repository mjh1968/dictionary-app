import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [word, setWord] = useState(null);
  let [results, setResults] = useState(null);

  function handleSearch(response) {
    console.log(response.data[0]);
    console.log(response.data[0].meanings[0].definitions[0].definition);
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
      <form className="searchForm" onSubmit={search}>
        <input type="text" onChange={WordSearch}></input>
        {/* <label class="form-label" for="form1">
          Search
        </label> */}
      </form>
      <Results results={results} />
    </div>
  );
}
