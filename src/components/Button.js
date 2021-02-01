import React from "react";
import "./Buttonstyle.css";

export default function Button(props) {
  return (
    <div>
      <button onClick={() => props.clickHandler(props.value)}>
        {props.name}
      </button>
    </div>
  );
}
