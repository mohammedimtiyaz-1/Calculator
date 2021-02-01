import React, { useState } from "react";
import "./calculatorStyle.css";
import Button from "./Button";

export default function Calculator() {
  const [inputValue, setInputValue] = useState("");
  const [calcStack, setCalcStack] = useState([]);

  const clickHandler = (value) => {
    if (Number.isInteger(+value)) {
      calcStack.push(value);
      setInputValue(inputValue + value);
    } else calculation(value);
  };

  const calculateExpn = (arr) => {
    let str = arr.join("");
    console.log(str);
  };

  const calculation = (sym) => {
    calcStack.push(sym);
    setInputValue("");
    switch (sym) {
      case "+": {
        break;
      }
      case "-": {
        break;
      }
      case "*": {
        break;
      }
      case "/": {
        break;
      }
      case "clear": {
        setInputValue("");
        setCalcStack([]);
        break;
      }
      case "=": {
        console.log(calcStack);
        const ans = calculateExpn(calcStack);
        setInputValue("");
        setCalcStack([]);
        break;
      }
      default: {
        break;
      }
    }
  };

  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <div className="layout">
        <div>
          <input
            className="input"
            type="number"
            placeholder="0"
            value={inputValue}
            onChange={(e) => inputChangeHandler(e)}
          ></input>
        </div>
        <div className="buttons">
          <Button name="1" value="1" clickHandler={clickHandler} />
          <Button name="2" value="2" clickHandler={clickHandler} />
          <Button name="3" value="3" clickHandler={clickHandler} />
          <Button name="Add(+)" value="+" clickHandler={clickHandler} />
          <Button name="4" value="4" clickHandler={clickHandler} />
          <Button name="5" value="5" clickHandler={clickHandler} />
          <Button name="6" value="6" clickHandler={clickHandler} />
          <Button name="Subtract(-)" value="-" clickHandler={clickHandler} />
          <Button name="7" value="7" clickHandler={clickHandler} />
          <Button name="8" value="8" clickHandler={clickHandler} />
          <Button name="9" value="9" clickHandler={clickHandler} />
          <Button name="Multiply(*)" value="*" clickHandler={clickHandler} />
          <Button name="Clear" value="clear" clickHandler={clickHandler} />
          <Button name="0" value="0" clickHandler={clickHandler} />
          <Button name="=" value="=" clickHandler={clickHandler} />
          <Button name="Divide(/)" value="/" clickHandler={clickHandler} />
        </div>
      </div>
    </div>
  );
}
