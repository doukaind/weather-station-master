import styled from "styled-components";

export const IndicatorWrapper = styled.li`
  background-color: ${({ theme }) => theme.color.blueBase};
  text-align: center;
  padding: ${({ theme }) => theme.size.space.xl};
`;
