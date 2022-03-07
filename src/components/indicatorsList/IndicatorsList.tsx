import React from "react";
import Subtitle from "../../common/text/subtitle/Subtitle";
import Indicator from "../indicator/Indicator";
import { IndicatorsWrapper } from "./IndicatorsWrapper";
import { MdSend } from "react-icons/md";
import { WindStatusIcon } from "./WindStatusIcon";
import Paragraph from "../../common/text/paragraph/Paragraph";
import { WindStatus } from "./WindStatus";
import { ParagraphSm } from "../../common/text/paragraph/ParagraphStyled";
import Progress from "../../common/Progress/Progress";
const IndicatorsList = () => {
  return (
    <>
      <Subtitle>Today's Highlight</Subtitle>
      <IndicatorsWrapper>
        <Indicator name="Visibility" unit="miles" value={10}>
          <WindStatus>
            <WindStatusIcon>
              <MdSend size={13} />
            </WindStatusIcon>
            <Paragraph as={ParagraphSm}>WSM</Paragraph>
          </WindStatus>
        </Indicator>
        <Indicator name="Visibility" unit="miles" value={10}>
          <Progress width={50.34} />
        </Indicator>
        <Indicator name="Visibility" unit="miles" value={10} />
        <Indicator name="Visibility" unit="miles" value={10} />
      </IndicatorsWrapper>
    </>
  );
};

export default IndicatorsList;
