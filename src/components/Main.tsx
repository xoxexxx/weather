import { Input } from "./Input"
import React, { useState, useEffect } from "react";
import { CardList } from "./CardList";
import { useLocalStorage } from "usehooks-ts";

export const Main = (): JSX.Element => {
    const [initialList] = useLocalStorage("list", []);
    const [list, setList] = React.useState(initialList);

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

    return(
        <>
            <Input setList={setList} />
            <div className="container">
            <CardList list={list} setList={setList} />
          </div>
        </>
    )
}