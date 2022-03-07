import styled from "styled-components";

export const WindStatusIcon = styled.i`
  background-color: ${({ theme }) => theme.color.greyDarkness};
  border-radius: 100%;
  display: grid;
  height: 30px;
  margin-right: ${({ theme }) => theme.size.space.xs};
  place-items: center;
  transform: rotate(115deg);
  width: 30px;
`;
