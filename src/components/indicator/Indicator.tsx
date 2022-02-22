import React from "react";
import Paragraph from "../../common/text/paragraph/Paragraph";
import { ParagraphMd } from "../../common/text/paragraph/ParagraphStyled";
import {
  IndicatorContent,
  IndicatorContentSecondary,
  IndicatorWrapper,
} from "./IndicatorWrapper";

export type IndicatorProps = {
  name: string;
  value: string | number;
  unit: string;
  children?: JSX.Element[] | JSX.Element;
};

const Indicator: React.FC<IndicatorProps> = ({
  name,
  value,
  unit,
  children,
}) => {
  return (
    <IndicatorWrapper>
      <Paragraph>{name}</Paragraph>
      <IndicatorContent>
        {value}
        <IndicatorContentSecondary>{unit}</IndicatorContentSecondary>
      </IndicatorContent>

      {children}
    </IndicatorWrapper>
  );
};

export default Indicator;
