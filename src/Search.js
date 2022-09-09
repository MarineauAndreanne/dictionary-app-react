import React, { useState, useEffect } from "react"
import axios from "axios"
import Results from "./Results"
import Photos from "./Photos"

import "./Search.css"

export default function Search(props) {
  const [word, setWord] = useState(props.defaultWord)
  const [results, setResults] = useState(null)
  const [photos, setPhotos] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    searchWord()
  }, [])

  async function searchWord() {
    setLoading(true)

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    let wordResponse = await axios.get(apiUrl)

    let pexelsApiKey =
      "563492ad6f9170000100000188ecca2cc54c46a39ba8946d5b450d86"
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=9`
    let headers = { Authorization: `Bearer ${pexelsApiKey}` }
    let pexelsResponse = await axios.get(pexelsApiUrl, { headers: headers })

    setResults(wordResponse.data[0])
    setPhotos(pexelsResponse.data.photos)
    setLoading(false)
  }

  function handleSubmit(event) {
    event.preventDefault()
    searchWord()
  }

  function handleWordChange(event) {
    setWord(event.target.value)
  }

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
              <button className="btn btn-outline-secondary">Search</button>
            </div>
          </div>
        </form>
      </section>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Results results={results} />
          <Photos photos={photos} />
        </>
      )}
    </div>
  )
}
