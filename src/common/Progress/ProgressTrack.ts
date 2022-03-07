import styled from "styled-components";

export const ProgressTrack = styled.div<any>`
  background-color: ${({ theme }) => theme.color.yellowBase};
  border-radius: 20px;
  content: "";
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0%;
  width: ${({ width }) => width + "%"};
`;
