import React from "react";
import { ParagraphMd } from "./ParagraphStyled";

type ParagraphProps = {
  children: React.ReactNode;
  secondary?: boolean;
  as?: any;
  third?: boolean;
};

const Paragraph: React.FC<ParagraphProps> = ({
  as,
  children,
  secondary = false,
  third = false,
}) => {
  return (
    <ParagraphMd as={as} secondary={secondary} third={third}>
      {children}
    </ParagraphMd>
  );
};

export default Paragraph;
