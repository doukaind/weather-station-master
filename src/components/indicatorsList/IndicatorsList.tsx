import React from "react";
import Subtitle from "../../common/text/subtitle/Subtitle";
import Indicator from "../indicator/Indicator";
import { IndicatorsWrapper } from "./IndicatorsWrapper";

const IndicatorsList = () => {
  return (
    <>
      <Subtitle>Today's Highlight</Subtitle>
      <IndicatorsWrapper>
        <Indicator />
        <Indicator />
        <Indicator />
        <Indicator />
      </IndicatorsWrapper>
    </>
  );
};

export default IndicatorsList;
