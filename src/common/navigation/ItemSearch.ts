import styled from "styled-components";

export const ItemSearch = styled.li`
  align-items: center;
  border: 1px solid transparent;
  color: ${({ theme }) => theme.color.greyLight};
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  padding: ${({ theme }) => `${theme.size.space.xl} ${theme.size.space.sm}`};
  transition: border 0.3s ease-in;
  &:hover {
    border-color: ${({ theme }) => theme.color.greyBase};
    cursor: pointer;
  }
  svg {
    fill: ${({ theme }) => theme.color.greyBase};
  }
`;
