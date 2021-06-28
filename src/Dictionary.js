import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [word, setWord] = useState(null);

  function search(event) {
    event.preventDefault();
    return alert("ola");
  }
  return (
    <div className="dictionary">
      <form className="searchForm">
        <input type="text" id="fname" name="fname"></input>
        {/* <label class="form-label" for="form1">
          Search
        </label> */}
      </form>
    </div>
  );
}
