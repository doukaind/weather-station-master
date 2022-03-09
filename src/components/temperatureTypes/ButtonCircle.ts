import { NONAME } from "dns";
import styled, { css } from "styled-components";
import theme from "../../schemas/theme";

const ButtonCircle = styled.button`
  border-radius: 50%;
  height: 40px;
  width: 40px;

  cursor: pointer;
  border: none;
  padding: 0;
  margin-left: ${({ theme }) => theme.size.space.sm};
  font-size: ${({ theme }) => theme.size.font.lg};
  background-color: ${({ theme }) => theme.color.stateBase};
  color: ${({ theme }) => theme.color.greyLight};
  &:hover {
    background-color: ${({ theme }) => theme.color.greyLight};
    color: ${({ theme }) => theme.color.stateText};
    opacity: 0.8;
  }

  &:focus {
    outline: none;
  }

  ${({ active }: { active: boolean }) =>
    active &&
    css`
      background-color: ${({ theme }) => theme.color.greyLight};
      color: ${({ theme }) => theme.color.stateText};
      pointer-events: none;
      &:hover {
        opacity: 1;
      }
    `}
`;

export default ButtonCircle;
