import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { fetchLocation } from "../../actions";
import { nameDay } from "../../utils/formatDate";
import generateImage from "../../utils/generateImage";
import intNumber from "../../utils/intNumber";
import { DailyWeather } from "./dailyWeather/DailyWeather";
import DailyWeatherListWrapper from "./DailyWeatherListWrapper";

const DailyWeatherList = ({ week, isCelsius }: any) => {
  console.log("WEEK: ", week);

  const isLoaded = useRef<boolean>(false);
  useEffect(() => {
    if (!isLoaded.current) {
      isLoaded.current = true;
      fetchLocation();
    }
  });
  return (
    <DailyWeatherListWrapper>
      {week?.map((day: Record<string, any>, index: number) => {
        return (
          <DailyWeather
            key={day.id}
            nameDay={nameDay(day.applicable_date, index)}
            maxTemp={intNumber(day.max_temp)}
            minTemp={intNumber(day.min_temp)}
            imgSrc={generateImage(day.weather_state_name)}
            isCelsius={isCelsius}
          />
        );
      })}
    </DailyWeatherListWrapper>
  );
};

const mapStateToProsp = (state: any) => {
  console.log("daily weather state: ", state);
  return {
    week: state.location.days.week,
    isCelsius: state.location.isCelsius,
  };
};

export default connect(mapStateToProsp, { fetchLocation })(DailyWeatherList);
