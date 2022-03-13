import React from "react";
import Synonyms from "./Synonyms";

import "./Meanings.css";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h4>{props.meaning.partOfSpeech}</h4>
      <div>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <div className="Definition">{definition.definition}</div>
              <div className="Example">{definition.example}</div>
              <Synonyms synonyms={props.meaning.synonyms} />
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}
