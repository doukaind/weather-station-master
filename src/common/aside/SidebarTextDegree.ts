import styled from "styled-components";

export const SidebarTextDegree = styled.h4`
  color: ${({ theme }) => theme.color.greyLight};
  font-size: ${({ theme }) => theme.size.font.xxxxxl};
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.size.space.xxxxxl};
  padding-bottom: ${({ theme }) => theme.size.space.sm};
  font-weight: 500;
  position: relative;
  @media (max-width: 960px) {
    margin-bottom: ${({ theme }) => theme.size.space.xl};
  }
`;

export const SidebarTextDegreeSecondary = styled.span`
  color: ${({ theme }) => theme.color.greyDark};
  font-size: ${({ theme }) => theme.size.font.xxxl};
  position: relative;
`;
