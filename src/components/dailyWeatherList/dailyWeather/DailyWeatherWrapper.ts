import styled from "styled-components";
import { ParagraphMd } from "../../../common/text/paragraph/ParagraphStyled";

const DailyWeatherWrapper = styled.li`
  background-color: ${({ theme }) => theme.color.blueBase};
  padding: ${({ theme }) => `${theme.size.space.lg} ${theme.size.space.xl}`};

  ${ParagraphMd} {
    white-space: wrap;
  }
`;

export default DailyWeatherWrapper;
