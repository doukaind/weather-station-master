import styled from "styled-components";

const DailyWeatherListWrapper = styled.ul`
  display: grid;

  margin-bottom: ${({ theme }) => theme.size.space.x8};
  margin-top: ${({ theme }) => theme.size.space.x4};

  grid-template-columns: repeat(auto-fit, minmax(126px, 1fr));
  grid-gap: ${({ theme }) => theme.size.space.xl};
  text-align: center;
`;

export default DailyWeatherListWrapper;
