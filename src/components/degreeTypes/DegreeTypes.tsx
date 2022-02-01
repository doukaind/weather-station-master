import React from "react";
import ButtonCircle from "./ButtonCircle";
import DegreesTypeWrapper from "./DegreeTypesWrapper";

const DegreesType = () => {
  return (
    <DegreesTypeWrapper>
      <ButtonCircle>°C</ButtonCircle>
      <ButtonCircle>°F</ButtonCircle>
    </DegreesTypeWrapper>
  );
};

export default DegreesType;
