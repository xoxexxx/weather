import React from "react";
import { BrowserRouter, Route, Routes, HashRouter} from "react-router-dom";
import { useState, useEffect } from "react";
import { Main } from "./components/Main";

import { SingleCity } from "./components/SingleCity";

import "./App.css";



const App = () => {
  const API_KEY = "679db32e83fbaf68c57927630de1157e";
  const [load, setLoad] = useState(false)
  const [manyRequest, setManyRequest] = useState(false)
  function fetchAPI() {

    try {
      fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=Moscow&APPID=${API_KEY}&units=metric`
      )
        .then((res) => res.json())
        .then((fetchData) => {
          if (fetchData.cod === "404") {
            setLoad(true)
          } else if (fetchData.cod === "429") {
              setManyRequest(true)
          } else {
            setLoad(false);
            setManyRequest(false)
          }
        });
      } catch (e: unknown) {
        throw Error()
    }
  }
  
  useEffect(() => {
   fetchAPI()
  }, []);
  console.log('request',manyRequest)
  return (
    <div className="App">
      {load && <div className="Cors">
        Необходимо принять <a target='_blank' href="http://api.openweathermap.org/data/2.5/weather?q=Moscow&APPID=679db32e83fbaf68c57927630de1157e&units=metric">CORS</a>, <br />
        затем перезагрузить страницу
        </div>  }
        {manyRequest && <div className="Cors">
        Отправлено слишком много запросов за последнее время. <br />
        Подождите минуту и попробуйте снова 
        </div> }
        <HashRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:city" element={<SingleCity/>} />
        </Routes>
        </HashRouter>
    </div>
  );
};

export default App;
