import React from "react";
import Meanings from "./Meanings";

import "./Results.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";

export default function Results(props) {
  return (
    <div className="Results">
      <section>
        <h2>{props.results.word}</h2>
        <a
          href={props.results.phonetics[0].audio}
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faHeadphones} />
        </a>
        <h3>{props.results.phonetics[0].text}</h3>
      </section>

      {props.results.meanings.map(function (meaning, index) {
        return (
          <section key={index}>
            <Meanings meaning={meaning} />
          </section>
        );
      })}
    </div>
  );
}
