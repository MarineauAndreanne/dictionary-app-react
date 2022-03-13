import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Search.css";

export default function Search() {
  const [word, setWord] = useState("");
  const [results, setResults] = useState(null);

  function handleApiResponse(response) {
    setResults(response.data[0]);
  }

  function searchWord(event) {
    event.preventDefault();
    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleApiResponse);
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
      <Results results={results} />
    </div>
  );
}
