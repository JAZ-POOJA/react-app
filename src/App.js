import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";

import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";

export const WeatherIcons = {
 "01d": "react-app/icons/01d@2x.png",
  "01n": "react-app/icons/01n@2x.png",
  "02d": "react-app/icons/02d@2x.png",
  "02n": "react-app/icons/02n@2x.png",
  "03n": "react-app/icons/03n@2x.png",
  "03d": "react-app/icons/03d@2x.png",
  "04d": "react-app/icons/04d@2x.png",
  "05d": "react-app/icons/03d@2x.png",
  "50n": "react-app/icons/03d@2x.png",
  "04n": "react-app/icons/03d@2x.png",
  "09n": "react-app/icons/09n@2x.png",
  "09d": "react-app/icons/09d@2x.png",
  "10d": "react-app/icons/10d@2x.png",
  "10n": "react-app/icons/10n@2x.png",
  "11d": "react-app/icons/11d@2x.png",
  "11n": "react-app/icons/11n@2x.png",
  "13n": "react-app/icons/13n@2x.png",
  "13d": "react-app/icons/13d@2x.png",
  "50d": "react-app/icons/50d@2x.png",
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
