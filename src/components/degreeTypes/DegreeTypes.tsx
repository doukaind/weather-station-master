import React from "react";
import ButtonCircle from "./ButtonCircle";
import DegreesTypeWrapper from "./DegreeTypesWrapper";

const DegreesType = () => {
  return (
    <DegreesTypeWrapper>
      <ButtonCircle active={false}>°C</ButtonCircle>
      <ButtonCircle active={true}>°F</ButtonCircle>
    </DegreesTypeWrapper>
  );
};

export default DegreesType;
