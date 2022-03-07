import styled from "styled-components";
import { ParagraphSm } from "../../common/text/paragraph/ParagraphStyled";

export const WindStatus = styled.div`
  display: grid;
  justify-content: center;
  grid-auto-flow: column;
  align-items: center;
  margin-top: ${({ theme }) => theme.size.space.xl};
  ${ParagraphSm} {
    margin: 0;
  }
`;
