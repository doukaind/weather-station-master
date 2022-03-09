import React from "react";
import { LoadIconText, LoadText, LoadWrapper } from "./LoadWrapper";
import Sun from "../Icons/Sun/sun";
const Loader = ({ search }: any) => {
  return (
    <LoadWrapper search={search}>
      <LoadIconText>
        <Sun />
        <LoadText>Loading Weather!!</LoadText>
      </LoadIconText>
    </LoadWrapper>
  );
};

export default Loader;
