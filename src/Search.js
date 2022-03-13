import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Search.css";

export default function Search(props) {
  const [word, setWord] = useState(props.defaultWord);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleApiResponse(response) {
    setResults(response.data[0]);
  }

  function searchWord() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleApiResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchWord();
  }

  function handleWordChange(event) {
    setWord(event.target.value);
  }

  function load() {
    setLoaded(true);
    searchWord();
  }

  if (loaded) {
    return (
      <div className="Search">
        <section>
          <h1>Which word are you looking for?</h1>
          <form onSubmit={handleSubmit}>
            <div className="Search-bar input-group mb-3">
              <input
                type="search"
                className="form-control"
                placeholder={word}
                onChange={handleWordChange}
              />
              <div className="input-group-append">
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  onClick={searchWord}
                >
                  Search
                </button>
              </div>
            </div>
          </form>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
  }
}
