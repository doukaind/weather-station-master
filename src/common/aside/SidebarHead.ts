import styled from "styled-components";

export const SidebarHead = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  margin-bottom: 6rem;
  position: relative;
  width: 100%;
  @media (max-width: 960px) {
    margin-bottom: ${({ theme }) => theme.size.space.xxxxl};
  }
`;
