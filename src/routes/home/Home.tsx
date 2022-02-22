import React from "react";
import DailyWeatherList from "../../components/dailyWeatherList/DailyWeatherList";
import IndicatorsList from "../../components/indicatorsList/IndicatorsList";
import DegreesType from "../../components/temperatureTypes/TemperatureTypes";

const Home = () => {
  return (
    <>
      <DegreesType />
      <DailyWeatherList />
      <IndicatorsList />
    </>
  );
};

export default Home;
