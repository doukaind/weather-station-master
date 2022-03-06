import styled from "styled-components";
import { ParagraphMd } from "../../../common/text/paragraph/ParagraphStyled";

const DailyWeatherWrapper = styled.li`
  padding: ${({ theme }) => `${theme.size.space.lg} ${theme.size.space.lg}`};

  background-color: ${({ theme }) => theme.color.blueBase};

  ${ParagraphMd} {
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;

export default DailyWeatherWrapper;
