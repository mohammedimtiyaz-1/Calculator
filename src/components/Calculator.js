import React, { useState } from "react";
import "./calculatorStyle.css";
import Button from "./Button";

export default function Calculator() {
  const [inputValue, setInputValue] = useState();

  const clickHandler = (value) => {
    console.log("clicled the value");
  };
  const changehandler = (e) => {
    console.log("changehan");
    setInputValue(e.target.value);
  };

  return (
    <div>
      <div className="layout">
        <div>
          <input
            className="input"
            type="numbers"
            placeholder="0"
            value={() => clickHandler(inputValue)}
            onChange={(e) => changehandler(e)}
          ></input>
        </div>
        <div className="buttons">
          <Button name="1" clickHandler={clickHandler} />
          <Button name="2" clickHandler={clickHandler} />
          <Button name="3" clickHandler={clickHandler} />
          <Button name="Add(+)" />
          <Button name="4" clickHandler={clickHandler} />
          <Button name="5" clickHandler={clickHandler} />
          <Button name="6" clickHandler={clickHandler} />
          <Button name="Subtract(-)" />
          <Button name="7" clickHandler={clickHandler} />
          <Button name="8" clickHandler={clickHandler} />
          <Button name="9" clickHandler={clickHandler} />
          <Button name="Multiply(*)" />
          <Button name="Clear" clickHandler={clickHandler} />
          <Button name="0" clickHandler={clickHandler} />

          <Button name="=" />

          <Button name="Divide(/)" />
        </div>
      </div>
    </div>
  );
}
