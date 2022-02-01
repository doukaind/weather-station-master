import React from "react";
import DailyWeatherList from "../../components/dailyWeatherList/DailyWeatherList";
import DegreesType from "../../components/degreeTypes/DegreeTypes";

const Home = () => {
  return (
    <>
      <DegreesType />
      <DailyWeatherList />
    </>
  );
};

export default Home;
