import styled from "styled-components";
import { ParagraphMd } from "../text/paragraph/ParagraphStyled";

export const SidebarLocation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  svg {
    margin-right: 5px;
    fill: ${({ theme }) => theme.color.greyDark};
  }
  ${ParagraphMd} {
    margin-bottom: 0;
  }
`;
