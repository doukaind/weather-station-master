import React from "react";
import Subtitle from "../../common/text/subtitle/Subtitle";
import Indicator from "../indicator/Indicator";
import { IndicatorsWrapper } from "./IndicatorsWrapper";

const IndicatorsList = () => {
  return (
    <>
      <Subtitle>Today's Highlight</Subtitle>
      <IndicatorsWrapper>
        <Indicator name="Visibility" unit="miles" value={10} />
        <Indicator name="Visibility" unit="miles" value={10} />
        <Indicator name="Visibility" unit="miles" value={10} />
        <Indicator name="Visibility" unit="miles" value={10} />
      </IndicatorsWrapper>
    </>
  );
};

export default IndicatorsList;
