import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [word, setWord] = useState(null);

  function search(event) {
    event.preventDefault();
    return alert(`searchig for  ${word}`);
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
    </div>
  );
}
