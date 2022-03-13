import React, { useState } from "react";

export default function Search() {
  const [word, setWord] = useState("");

  function searchWord(event) {
    event.preventDefault();
    alert(word);
  }

  function handleWordChange(event) {
    setWord(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={searchWord}>
        <input
          type="search"
          autoFocus={true}
          placeholder="Type a word"
          onChange={handleWordChange}
        />
        <button className="btn btn-dark">Search</button>
      </form>
    </div>
  );
}
