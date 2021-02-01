import React from "react";
import "./Buttonstyle.css";

export default function Button(props) {
  const changeHandler = () => {
    props.clickHandler(props.name);
  };

  return (
    <div>
      <button onClick={() => changeHandler()}>{props.name}</button>
    </div>
  );
}
