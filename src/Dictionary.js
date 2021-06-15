import React, { useState } from "react";

export default function Dictionary() {
  let [word, setWord] = useState(null);
  function search(event) {
    event.preventDefault();
    return null;
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" className="input">
          {" "}
        </input>
      </form>
    </div>
  );
}
