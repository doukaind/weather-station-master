import styled from "styled-components";

type ParagraphMdProps = {
  secondary: boolean;
  third: boolean;
};

export const ParagraphMd = styled.p<ParagraphMdProps>`
  font-size: ${({ theme }) => theme.size.font.md};

  color: ${({ secondary, theme }) =>
    secondary ? theme.color.greyBase : theme.color.greyLight};

  ${({ third, theme }) =>
    third &&
    `
    color: ${theme.color.greyDark};
  `}

  margin-bottom: ${({ theme }) => theme.size.space.sm};
`;

export const ParagraphSm = styled.p`
  font-size: ${({ theme }) => theme.size.font.sm};
`;

export const ParagraphLg = styled.p`
  font-size: ${({ theme }) => theme.size.font.lg};
`;
