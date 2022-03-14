import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

import "./Search.css";

export default function Search(props) {
  const [word, setWord] = useState(props.defaultWord);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState("");

  function handleApiResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function searchWord() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleApiResponse);

    let pexelsApiKey =
      "563492ad6f9170000100000188ecca2cc54c46a39ba8946d5b450d86";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
  }
}
