import styled from "styled-components";

export const SidebarImage = styled.img`
  margin-bottom: ${({ theme }) => theme.size.space.xxxxxl};
  position: relative;
  @media (max-width: 960px) {
    margin-bottom: ${({ theme }) => theme.size.space.xxxl};
  }
`;
