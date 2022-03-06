import React from "react";
import Paragraph from "../../../common/text/paragraph/Paragraph";
import { getNameDegree, setConvertDegrees } from "../../../utils/converters";
import { DailyImage } from "./DailyImage";
import DailyWeatherWrapper from "./DailyWeatherWrapper";

export const DailyWeather = ({
  nameDay,
  imgSrc,
  maxTemp,
  minTemp,
  isCelsius,
}: any) => {
  const nameDegrees = getNameDegree(isCelsius);
  return (
    <DailyWeatherWrapper>
      <Paragraph>{nameDay}</Paragraph>
      <DailyImage src={imgSrc} alt={nameDay} />

      <Paragraph>
        {setConvertDegrees(minTemp, isCelsius)}
        {nameDegrees}
      </Paragraph>
      <Paragraph>
        {setConvertDegrees(maxTemp, isCelsius)}
        {nameDegrees}
      </Paragraph>
    </DailyWeatherWrapper>
  );
};
