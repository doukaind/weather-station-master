import styled from "styled-components";

export const SearchNavWrapper = styled.div<any>`
  position: fixed;
  overflow-y: auto;
  height: 100vh;
  width: calc(456px - 92px);
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 1;
  padding: 18px ${({ theme }) => theme.size.space.xxxl} 18px;
  background-color: ${({ theme }) => theme.color.blueBase};
  transform: ${({ active }) =>
    active ? "translateX(0)" : "translateX(-456px)"};
  transition: transform 0.5s ease;

  @media (max-width: 960px) {
    padding: ${({ theme }) => theme.size.space.xl};

    width: calc(100% - 44px);
    transform: ${({ active }) =>
      active ? "translateX(0)" : "translateX(-100%)"};
  }
`;
