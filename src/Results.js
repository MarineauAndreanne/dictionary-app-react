import React from "react";
import Meanings from "./Meanings";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Resutls">
        <h2>{props.results.word}</h2>
        <h3>{props.results.phonetic}</h3>
        <a
          href={props.results.phonetics[0].audio}
          className="Audio-link"
          target="_blank"
          rel="noreferrer"
        >
          Phonetics audio
        </a>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meanings meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
