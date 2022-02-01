import React from "react";
import { ParagraphMd } from "./ParagraphStyled";

type ParagraphProps = {
  children: React.ReactNode;
  secondary?: boolean;
};

const Paragraph: React.FC<ParagraphProps> = ({
  children,
  secondary = false,
}) => {
  return <ParagraphMd secondary={secondary}>{children}</ParagraphMd>;
};

export default Paragraph;
