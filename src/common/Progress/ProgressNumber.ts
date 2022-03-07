import styled from "styled-components";

export const ProgressNumbers = styled.div`
  font-size: ${({ theme }) => theme.size.font.xs};
  font-weight: 700;
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto 0.25rem;
  color: ${({ theme }) => theme.color.greyBase};
`;
