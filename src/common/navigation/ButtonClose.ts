import styled from "styled-components";

export const ButtonClose = styled.button`
  margin-left: auto;
  cursor: pointer;
  display: grid;
  margin-bottom: ${({ theme }) => theme.size.space.xxxl};
  svg {
    fill: ${({ theme }) => theme.color.greyBase};
  }
  &:focus {
    outline: none;
  }
  background-color: transparent;
`;
