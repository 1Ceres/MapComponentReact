import React from "react";
import Term from "./Term.jsx";
import emojipedia from "../emojipedia.js";

function Create() {
  return emojipedia.map(createContent);
}

function createContent(element) {
  return (
    <Term
      key={element.id}
      emoji={element.emoji}
      name={element.name}
      meaning={element.meaning}
    />
  );
}

export default Create;
