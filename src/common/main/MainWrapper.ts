import styled from "styled-components";

export const MainWrapper = styled.section`
  background-color: ${({ theme }) => theme.color.blueDark};
  padding-top: ${({ theme }) => theme.size.space.x3};
`;

export default MainWrapper;
