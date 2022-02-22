import styled from "styled-components";

export const IndicatorsWrapper = styled.ul`
  display: grid;
  grid-gap: ${({ theme }) =>
    `${theme.size.space.xxl} ${theme.size.space.xxxl}`};
  grid-template-columns: repeat() (auto-fit, minmax(275, 1fr));
`;
