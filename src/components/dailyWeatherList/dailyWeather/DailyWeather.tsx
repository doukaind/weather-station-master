import React from "react";
import Paragraph from "../../../common/text/paragraph/Paragraph";
import DailyWeatherWrapper from "./DailyWeatherWrapper";

export const DailyWeather = () => {
  return (
    <DailyWeatherWrapper>
      <Paragraph>Sun. 7 Jun</Paragraph>
      <Paragraph>Icon</Paragraph>
      <Paragraph>16 C</Paragraph>
      <Paragraph>11 C</Paragraph>
    </DailyWeatherWrapper>
  );
};
