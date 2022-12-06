import React, { useEffect, useState, memo } from "react";
import { Data, City } from "./type";
import { Icon16CancelCircle } from "@vkontakte/icons";
import { Link } from "react-router-dom";
export const Card: React.FC<City | any> = ({ city, remove }) => {
  const API_KEY = "679db32e83fbaf68c57927630de1157e";
  const [data, setData] = React.useState<Data | null | any>(null);
  
 function fetchAPI() {
    try {
      fetch(
        `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`
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
        throw Error()
    }
  }
  useEffect(() => {
   fetchAPI()
  }, []);

  return (
    
      <div className="Card" data-testid="card" >
        <div onClick={() => remove(city)} className="x">
          <Icon16CancelCircle width={30} height={30} />
        </div>
        <div className="MainInfo">
          <img
            src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
            alt="weather"
            className="Icon"
          /> <br />
          <Link to={`/${city.toLowerCase()}`} state={{ from: data?.coord }} data-testid='city-name' className="Title">{data?.name}</Link>
          <div className="Description">{data?.weather[0]?.description}</div>
          <div className="Temperature">{data?.main.temp.toFixed()}°</div>
        </div>
        <div className="Information">
          <div>Humidity: {data?.main.humidity.toFixed()}φ</div>
          <div>Feels like: {data?.main.feels_like.toFixed()}°</div>
          <div>Wind speed: {data?.wind.speed.toFixed(1)}kn</div>
        </div>
      </div>
    
  );
};
