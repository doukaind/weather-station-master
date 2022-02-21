import React from "react";
import DailyWeatherList from "../../components/dailyWeatherList/DailyWeatherList";
import DegreesType from "../../components/temperatureTypes/TemperatureTypes";

const Home = () => {
  return (
    <>
      <DegreesType />
      <DailyWeatherList />
    </>
  );
};

export default Home;
