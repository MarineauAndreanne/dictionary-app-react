import React from "react";

export default function Meanings(props) {
  console.log(props.meaning.partOfSpeech);
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
            </div>
          );
        })}
      </div>
    </div>
  );
}
