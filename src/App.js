import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";

import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";

export const WeatherIcons = {
  "01d": "/icons/tree.svg",
  "01n": "/icons/cloud-icon.svg",
  "02d": "/icons/sunrise.svg",
  "02n": "/icons/moon.svg",
  "03d": "/icons/verycloudy.svg",
  "03n": "/icons/cloud.svg",
  "04d": "/icons/tree.svg",
  "05d": "/icons/smile-cloud.svg",
  "50n": "/icons/smile-cloud.svg",
  "04n": "/icons/night.svg",
  "09d": "/icons/rain.svg",
  "09n": "/icons/mountain.svg",
  "10d": "/icons/raindrops.svg",
  "10n": "/icons/raincloud.svg",
  "11d": "/icons/smile-cloud.svg",
  "11n": "/icons/storm.svg",
};
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px 10px 20px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Montserrat;
`;

const AppLabel = styled.span`
  color: black;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;


function App() {
  const[city,updateCity] = useState();
  const[weather,updateWeather] = useState();
  const fetchWeather = async(e) => {
    e.preventDefault();
    const response = await Axios.get(
         ` https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=389ab5f855b1635a19596ecdf07f2e0d`,
    );
    updateWeather(response.data);
  };

  return (
    <Container>

      <AppLabel><h2> Weather App </h2> </AppLabel>
       {city && weather ? (
        <WeatherComponent weather = {weather } city = {city} />
       ): (
        <CityComponent updateCity = { updateCity} fetchWeather = { fetchWeather} />
       ) }
      
      
     
    </Container>
  );
}

export default App;
