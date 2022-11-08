import "./components.css";
import App from "../App";
import React, { useState, useRef, PropsWithChildren, ChangeEvent } from "react";
import { keyboard } from "@testing-library/user-event/dist/keyboard";
import { preProcessFile } from "typescript";
import { validateHeaderValue } from "http";

export const Input: React.FC<any> = ({ setList }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState("");
  const handleOnChange = (event: any) => {
    setInputValue(event.target.value);
  };
  const handleOnClick: () => void = () => {
    if (inputValue.length == 0) 
    return
    setList((state: any) => [...state, inputValue]);
    setInputValue("");
    inputRef.current?.focus();
  };

  return (
    <div className="form-input">
      <input
        placeholder="City"
        type="text"
        value={inputValue}
        onChange={handleOnChange}
        ref={inputRef}
        onKeyDown={(e: any) => {
          if (inputValue.length == 0)
            return
          if (e.key === "Enter") {
            handleOnClick();
            console.log("asas");
          }
        }}
      />
      <button onClick={handleOnClick}>ADD</button>
      {/* <button onClick={}></button> */}
    </div>
  );
};
