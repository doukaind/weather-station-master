import styled from "styled-components";

export const ProgressPercentege = styled.div`
  font-size: ${({ theme }) => theme.size.font.xs};
  font-weight: 700;
  text-align: right;
  width: 90%;
  margin: 0.25rem auto 0;
  color: ${({ theme }) => theme.color.greyBase};
`;
