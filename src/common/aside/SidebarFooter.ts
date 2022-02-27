import styled from "styled-components";

export const AsideFooter = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  justify-content: center;
  grid-gap: 20px 0;
  margin-top: ${({ theme }) => theme.size.space.xxxl};
  position: relative;
  @media (max-width: 960px) {
    margin-bottom: ${({ theme }) => theme.size.space.xxxxl};
    margin-top: ${({ theme }) => theme.size.space.xxl};
  }
`;
