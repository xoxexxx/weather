import React, { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";

export const SingleCity = (props: any) => {
  const location = useLocation();
  const API_KEY = "679db32e83fbaf68c57927630de1157e";
  const [data, setData] = React.useState<any>(null);

  function fetchAPI() {
    try {
      fetch(
        `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?lat=${location.state.from.lat}&lon=${location.state.from.lon}&appid=${API_KEY}&units=metric`
      )
        .then((res) => res.json())
        .then((fetchData) => {
          if (fetchData.cod === "404") {
            throw Error("CITY_NOT_FOUND");
          } else {
            setData(fetchData);
          }
        });
    } catch (e: unknown) {
      throw Error();
    }
  }
  useEffect(() => {
    fetchAPI();
  }, []);

  
  return (
    <>
      <h1>{data?.city.name}</h1>
      <div className="single-city" data-testid='single-city'>
        <h3>{data?.list[0].dt_txt.split(' ').reverse().pop()}</h3>
        <div className="forecast">
          <h2 className="Title">{data?.list[0].dt_txt.split(' ').pop()}</h2>
          <img
            src={`https://openweathermap.org/img/wn/${data?.list[0].weather[0].icon}@2x.png`}
            alt="weather"
            className="Icon"
          />{" "}
          <br />
          <div className="Description">
            {data?.list[0].weather[0].description}
          </div>
          <div>Wind speed: {data?.list[0].wind.speed.toFixed(1)}kn</div>
          <div className="Temperature">
            {data?.list[0].main.temp.toFixed()}°
          </div>
          
        </div>
        <div className="forecast">
        <h2 className="Title">{data?.list[2].dt_txt.split(' ').pop()}</h2>
          <img
            src={`https://openweathermap.org/img/wn/${data?.list[2].weather[0].icon}@2x.png`}
            alt="weather"
            className="Icon"
          />{" "}
          <br />
          <div className="Description">
            {data?.list[2].weather[0].description}
          </div>
          <div>Wind speed: {data?.list[2].wind.speed.toFixed(1)}kn</div>
          <div className="Temperature">
            {data?.list[2].main.temp.toFixed()}°
          </div>
          
        </div>
        <div className="forecast">
        <h2 className="Title">{data?.list[4].dt_txt.split(' ').pop()}</h2>
          <img
            src={`https://openweathermap.org/img/wn/${data?.list[4].weather[0].icon}@2x.png`}
            alt="weather"
            className="Icon"
          />{" "}
          <br />
          <div className="Description">
            {data?.list[4].weather[0].description}
          </div>
          <div>Wind speed: {data?.list[4].wind.speed.toFixed(1)}kn</div>
          <div className="Temperature">
            {data?.list[4].main.temp.toFixed()}°
          </div>
          
        </div>
        <div className="forecast">
        <h2 className="Title">{data?.list[6].dt_txt.split(' ').pop()}</h2>
          <img
            src={`https://openweathermap.org/img/wn/${data?.list[6].weather[0].icon}@2x.png`}
            alt="weather"
            className="Icon"
          />{" "}
          <br />
          <div className="Description">
            {data?.list[6].weather[0].description}
          </div>
          <div>Wind speed: {data?.list[6].wind.speed.toFixed(1)}kn</div>
          <div className="Temperature">
            {data?.list[6].main.temp.toFixed()}°
          </div>
          
        </div>
      </div>
      <div className="single-city">
      <h3>{data?.list[8].dt_txt.split(' ').reverse().pop()}</h3>
        <div className="forecast">
          <h2 className="Title">{data?.list[8].dt_txt.split(' ').pop()}</h2>
          <img
            src={`https://openweathermap.org/img/wn/${data?.list[8].weather[0].icon}@2x.png`}
            alt="weather"
            className="Icon"
          />{" "}
          <br />
          <div className="Description">
            {data?.list[8].weather[0].description}
          </div>
          <div>Wind speed: {data?.list[0].wind.speed.toFixed(1)}kn</div>
          <div className="Temperature">
            {data?.list[8].main.temp.toFixed()}°
          </div>
          
        </div>
        <div className="forecast">
        <h2 className="Title">{data?.list[10].dt_txt.split(' ').pop()}</h2>
          <img
            src={`https://openweathermap.org/img/wn/${data?.list[10].weather[0].icon}@2x.png`}
            alt="weather"
            className="Icon"
          />{" "}
          <br />
          <div className="Description">
            {data?.list[10].weather[0].description}
          </div>
          <div>Wind speed: {data?.list[10].wind.speed.toFixed(1)}kn</div>
          <div className="Temperature">
            {data?.list[10].main.temp.toFixed()}°
          </div>
          
        </div>
        <div className="forecast">
        <h2 className="Title">{data?.list[12].dt_txt.split(' ').pop()}</h2>
          <img
            src={`https://openweathermap.org/img/wn/${data?.list[12].weather[0].icon}@2x.png`}
            alt="weather"
            className="Icon"
          />{" "}
          <br />
          <div className="Description">
            {data?.list[12].weather[0].description}
          </div>
          <div>Wind speed: {data?.list[12].wind.speed.toFixed(1)}kn</div>
          <div className="Temperature">
            {data?.list[12].main.temp.toFixed()}°
          </div>
          
        </div>
        <div className="forecast">
        <h2 className="Title">{data?.list[14].dt_txt.split(' ').pop()}</h2>
          <img
            src={`https://openweathermap.org/img/wn/${data?.list[14].weather[0].icon}@2x.png`}
            alt="weather"
            className="Icon"
          />{" "}
          <br />
          <div className="Description">
            {data?.list[14].weather[0].description}
          </div>
          <div>Wind speed: {data?.list[14].wind.speed.toFixed(1)}kn</div>
          <div className="Temperature">
            {data?.list[14].main.temp.toFixed()}°
          </div>
          
        </div>
      </div>
      <div className="single-city">
      <h3>{data?.list[16].dt_txt.split(' ').reverse().pop()}</h3>
        <div className="forecast">
          <h2 className="Title">{data?.list[16].dt_txt.split(' ').pop()}</h2>
          <img
            src={`https://openweathermap.org/img/wn/${data?.list[16].weather[0].icon}@2x.png`}
            alt="weather"
            className="Icon"
          />{" "}
          <br />
          <div className="Description">
            {data?.list[16].weather[0].description}
          </div>
          <div>Wind speed: {data?.list[16].wind.speed.toFixed(1)}kn</div>
          <div className="Temperature">
            {data?.list[16].main.temp.toFixed()}°
          </div>
          
        </div>
        <div className="forecast">
        <h2 className="Title">{data?.list[18].dt_txt.split(' ').pop()}</h2>
          <img
            src={`https://openweathermap.org/img/wn/${data?.list[18].weather[0].icon}@2x.png`}
            alt="weather"
            className="Icon"
          />{" "}
          <br />
          <div className="Description">
            {data?.list[18].weather[0].description}
          </div>
          <div>Wind speed: {data?.list[18].wind.speed.toFixed(1)}kn</div>
          <div className="Temperature">
            {data?.list[18].main.temp.toFixed()}°
          </div>
          
        </div>
        <div className="forecast">
        <h2 className="Title">{data?.list[20].dt_txt.split(' ').pop()}</h2>
          <img
            src={`https://openweathermap.org/img/wn/${data?.list[20].weather[0].icon}@2x.png`}
            alt="weather"
            className="Icon"
          />{" "}
          <br />
          <div className="Description">
            {data?.list[20].weather[0].description}
          </div>
          <div>Wind speed: {data?.list[20].wind.speed.toFixed(1)}kn</div>
          <div className="Temperature">
            {data?.list[20].main.temp.toFixed()}°
          </div>
          
        </div>
        <div className="forecast">
        <h2 className="Title">{data?.list[22].dt_txt.split(' ').pop()}</h2>
          <img
            src={`https://openweathermap.org/img/wn/${data?.list[22].weather[0].icon}@2x.png`}
            alt="weather"
            className="Icon"
          />{" "}
          <br />
          <div className="Description">
            {data?.list[22].weather[0].description}
          </div>
          <div>Wind speed: {data?.list[22].wind.speed.toFixed(1)}kn</div>
          <div className="Temperature">
            {data?.list[22].main.temp.toFixed()}°
          </div>
          
        </div>
      </div>
      <div className="single-city">
      <h3>{data?.list[24].dt_txt.split(' ').reverse().pop()}</h3>
        <div className="forecast">
          <h2 className="Title">{data?.list[24].dt_txt.split(' ').pop()}</h2>
          <img
            src={`https://openweathermap.org/img/wn/${data?.list[24].weather[0].icon}@2x.png`}
            alt="weather"
            className="Icon"
          />{" "}
          <br />
          <div className="Description">
            {data?.list[24].weather[0].description}
          </div>
          <div>Wind speed: {data?.list[24].wind.speed.toFixed(1)}kn</div>
          <div className="Temperature">
            {data?.list[24].main.temp.toFixed()}°
          </div>
          
        </div>
        <div className="forecast">
        <h2 className="Title">{data?.list[26].dt_txt.split(' ').pop()}</h2>
          <img
            src={`https://openweathermap.org/img/wn/${data?.list[26].weather[0].icon}@2x.png`}
            alt="weather"
            className="Icon"
          />{" "}
          <br />
          <div className="Description">
            {data?.list[26].weather[0].description}
          </div>
          <div>Wind speed: {data?.list[26].wind.speed.toFixed(1)}kn</div>
          <div className="Temperature">
            {data?.list[26].main.temp.toFixed()}°
          </div>
          
        </div>
        <div className="forecast">
        <h2 className="Title">{data?.list[28].dt_txt.split(' ').pop()}</h2>
          <img
            src={`https://openweathermap.org/img/wn/${data?.list[28].weather[0].icon}@2x.png`}
            alt="weather"
            className="Icon"
          />{" "}
          <br />
          <div className="Description">
            {data?.list[28].weather[0].description}
          </div>
          <div>Wind speed: {data?.list[28].wind.speed.toFixed(1)}kn</div>
          <div className="Temperature">
            {data?.list[28].main.temp.toFixed()}°
          </div>
          
        </div>
        <div className="forecast">
        <h2 className="Title">{data?.list[30].dt_txt.split(' ').pop()}</h2>
          <img
            src={`https://openweathermap.org/img/wn/${data?.list[30].weather[0].icon}@2x.png`}
            alt="weather"
            className="Icon"
          />{" "}
          <br />
          <div className="Description">
            {data?.list[30].weather[0].description}
          </div>
          <div>Wind speed: {data?.list[30].wind.speed.toFixed(1)}kn</div>
          <div className="Temperature">
            {data?.list[30].main.temp.toFixed()}°
          </div>
          
        </div>
      </div>
      <div className="single-city">
      <h3>{data?.list[32].dt_txt.split(' ').reverse().pop()}</h3>
        <div className="forecast">
          <h2 className="Title">{data?.list[32].dt_txt.split(' ').pop()}</h2>
          <img
            src={`https://openweathermap.org/img/wn/${data?.list[32].weather[0].icon}@2x.png`}
            alt="weather"
            className="Icon"
          />{" "}
          <br />
          <div className="Description">
            {data?.list[32].weather[0].description}
          </div>
          <div>Wind speed: {data?.list[32].wind.speed.toFixed(1)}kn</div>
          <div className="Temperature">
            {data?.list[32].main.temp.toFixed()}°
          </div>
          
        </div>
        <div className="forecast">
        <h2 className="Title">{data?.list[34].dt_txt.split(' ').pop()}</h2>
          <img
            src={`https://openweathermap.org/img/wn/${data?.list[34].weather[0].icon}@2x.png`}
            alt="weather"
            className="Icon"
          />{" "}
          <br />
          <div className="Description">
            {data?.list[34].weather[0].description}
          </div>
          <div>Wind speed: {data?.list[34].wind.speed.toFixed(1)}kn</div>
          <div className="Temperature">
            {data?.list[34].main.temp.toFixed()}°
          </div>
          
        </div>
        <div className="forecast">
        <h2 className="Title">{data?.list[36].dt_txt.split(' ').pop()}</h2>
          <img
            src={`https://openweathermap.org/img/wn/${data?.list[36].weather[0].icon}@2x.png`}
            alt="weather"
            className="Icon"
          />{" "}
          <br />
          <div className="Description">
            {data?.list[36].weather[0].description}
          </div>
          <div>Wind speed: {data?.list[36].wind.speed.toFixed(1)}kn</div>
          <div className="Temperature">
            {data?.list[36].main.temp.toFixed()}°
          </div>
          
        </div>
        <div className="forecast">
        <h2 className="Title">{data?.list[38].dt_txt.split(' ').pop()}</h2>
          <img
            src={`https://openweathermap.org/img/wn/${data?.list[38].weather[0].icon}@2x.png`}
            alt="weather"
            className="Icon"
          />{" "}
          <br />
          <div className="Description">
            {data?.list[38].weather[0].description}
          </div>
          <div>Wind speed: {data?.list[38].wind.speed.toFixed(1)}kn</div>
          <div className="Temperature">
            {data?.list[38].main.temp.toFixed()}°
          </div>
          
        </div>
      </div>
    </>
  );
};
