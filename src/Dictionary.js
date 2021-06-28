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
      <form onSubmit={search}>
        <input type="search" className="input_form"></input>
      </form>
    </div>
  );
}
