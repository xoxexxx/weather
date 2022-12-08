import "./components.css";

import React, { useState, useRef } from "react";


export const Input: React.FC<any> = ({ setList }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = React.useState<string>("");

  const handleOnChange = (event: React.ChangeEvent<HTMLElement>) => {
    setInputValue((event.target as any).value);
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
        onKeyDown={(e: React.KeyboardEvent<HTMLElement>) => {
          if (inputValue.length == 0)
            return
          if (e.key === "Enter") {
            handleOnClick();
          }
        }}
      />
      <button onClick={handleOnClick}>ADD</button>
    </div>
  );
};
