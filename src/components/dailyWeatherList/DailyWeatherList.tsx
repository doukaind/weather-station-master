import React from "react";
import { DailyWeather } from "./dailyWeather/DailyWeather";
import DailyWeatherListWrapper from "./DailyWeatherListWrapper";

const DailyWeatherList = () => {
  return (
    <DailyWeatherListWrapper>
      <DailyWeather />
      <DailyWeather />
      <DailyWeather />
      <DailyWeather />
      <DailyWeather />
    </DailyWeatherListWrapper>
  );
};

export default DailyWeatherList;
