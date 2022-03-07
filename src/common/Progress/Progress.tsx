import React from "react";
import { ProgressNumbers } from "./ProgressNumber";
import { ProgressPercentege } from "./ProgressPercentage";
import { ProgressTrack } from "./ProgressTrack";
import { ProgressWrapper } from "./ProgressWraper";

const Progress = ({ width }: any) => {
  return (
    <>
      <ProgressNumbers>
        <span>0</span>
        <span>50</span>
        <span>100</span>
      </ProgressNumbers>
      <ProgressWrapper>
        <ProgressTrack width={width} />
      </ProgressWrapper>
      <ProgressPercentege>%</ProgressPercentege>
    </>
  );
};

export default Progress;
