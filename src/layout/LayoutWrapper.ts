import styled from "styled-components";

const LayoutWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 2fr;

  min-height: 100vh;

  @media (max-width: 801px) {
    grid-template-columns: 1fr;
  }
`;

export default LayoutWrapper;
