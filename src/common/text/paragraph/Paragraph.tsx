import React from "react";
import { ParagraphMd } from "./ParagraphStyled";

type ParagraphProps = {
  children: React.ReactNode;
};

const Paragraph: React.FC<ParagraphProps> = ({ children }) => {
  return <ParagraphMd>{children}</ParagraphMd>;
};

export default Paragraph;
