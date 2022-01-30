import styled from "styled-components";

const DailyWeatherListWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  grid-gap: ${({ theme }) => theme.size.space.xl};
  text-align: center;
  /* overflow: hidden; */
`;

export default DailyWeatherListWrapper;
