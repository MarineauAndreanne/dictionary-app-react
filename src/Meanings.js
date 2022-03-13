import React from "react";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h4>{props.meaning.partOfSpeech}</h4>
      <div>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              {definition.definition}
              <br />
              <em>{definition.example}</em>
              <br />
              <Synonyms synonyms={props.meaning.synonyms} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
