import styled from "styled-components";

type ParagraphMdProps = {
  secondary: boolean;
};

export const ParagraphMd = styled.p<ParagraphMdProps>`
  font-size: ${({ theme }) => theme.size.font.md};

  color: ${({ secondary, theme }) =>
    secondary ? theme.color.greyBase : theme.color.greyLight};

  margin-bottom: ${({ theme }) => theme.size.space.sm};
`;

export const ParagraphSm = styled.p`
  font-size: ${({ theme }) => theme.size.font.sm};
`;

export const ParagraphLg = styled.p`
  font-size: ${({ theme }) => theme.size.font.lg};
`;
