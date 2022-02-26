import styled from "styled-components";

export const Search = styled.button`
  background-color: ${({ theme }) => theme.color.greyDarkness};
  color: ${({ theme }) => theme.color.greyLight};
  height: 40px;
  box-shadow: ${({ theme }) => theme.shadow};
  cursor: pointer;

  transition: opacity 0.5s ease;
  font-size: ${({ theme }) => theme.size.font.md};
  border: none;
  outline: inherit;

  &:hover {
    visibility: visible;
    opacity: 0.8;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.5);
  }
`;
