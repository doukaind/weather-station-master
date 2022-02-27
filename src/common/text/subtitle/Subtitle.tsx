import React from "react";
import { SubtitleBase } from "./SubtitleStyled";

export type SubtitleProps = {
  as: any;
  secondary: boolean;
  children: React.ReactNode;
};

const Subtitle = ({ as, children, secondary }: any) => {
  return (
    <SubtitleBase as={as} secondary={false}>
      {children}
    </SubtitleBase>
  );
};

export default Subtitle;
