import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [word, setWord] = useState(null);

  function search(event) {
    event.preventDefault();
    return alert("ola");
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" className="input"></input>
      </form>
    </div>
  );
}
