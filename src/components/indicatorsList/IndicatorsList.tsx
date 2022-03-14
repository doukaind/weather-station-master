import React, { useEffect, useRef } from "react";
import Subtitle from "../../common/text/subtitle/Subtitle";
import Indicator from "../indicator/Indicator";
import { IndicatorsWrapper } from "./IndicatorsWrapper";
import { MdSend } from "react-icons/md";
import { WindStatusIcon } from "./WindStatusIcon";
import Paragraph from "../../common/text/paragraph/Paragraph";
import { WindStatus } from "./WindStatus";
import { ParagraphSm } from "../../common/text/paragraph/ParagraphStyled";
import Progress from "../../common/Progress/Progress";
import { connect } from "react-redux";
import { fetchLocation } from "../../actions";
import intNumber, { numberOneFixed } from "../../utils/intNumber";
const IndicatorsList = ({ today }: any) => {
  "today: ", today);
  const isLoaded = useRef<boolean>(false);

  useEffect(() => {
    if (!isLoaded.current) {
      isLoaded.current = true;
      fetchLocation();
    }
  });

  return (
    <>
      {today && (
        <>
          <Subtitle>Today's Highlight</Subtitle>
          <IndicatorsWrapper>
            <Indicator
              name="Wind statu"
              unit="mph"
              value={intNumber(today.wind_speed)}
            >
              <WindStatus>
                <WindStatusIcon>
                  <MdSend size={13} />
                </WindStatusIcon>
                <Paragraph as={ParagraphSm}>WSM</Paragraph>
              </WindStatus>
            </Indicator>
            <Indicator name="Humidity" unit="%" value={today.humidity}>
              <Progress width={today.humidity} />
            </Indicator>
            <Indicator
              name="Visibility"
              unit="miles"
              value={numberOneFixed(today.visibility)}
            ></Indicator>

            <Indicator
              name="Air Pressure"
              unit="mb"
              value={intNumber(today.air_pressure)}
            />
          </IndicatorsWrapper>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state: any) => {
  "STATE: ", state);
  return state.location.days;
};

export default connect(mapStateToProps, { fetchLocation })(IndicatorsList);
