import React from "react";
import "./App.css";
import { Main } from "./components/Main";
import { Card } from "./components/Card";
import { CardList } from "./components/CardList";
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SingleCity } from "./components/SingleCity";
const App = ({city, remove}: any) => {
  

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:city" element={<SingleCity city={city}/>} />
      </Routes>

      </BrowserRouter>
    </div>
  );
};

export default App;
