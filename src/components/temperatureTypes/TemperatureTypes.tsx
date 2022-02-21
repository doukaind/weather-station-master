import React, { useEffect, useRef } from "react";
import ButtonCircle from "./ButtonCircle";
import DegreesTypeWrapper from "./TemperatureTypesWrapper";
import { connect } from "react-redux";
import { getDegreeType } from "../../actions";

const TemperatureType = (props: any) => {
  const isMounted = useRef(false);
  useEffect(() => {
    console.log("PROPS: ", props);
    if (isMounted.current) {
      isMounted.current = true;
    }
  }, []);
  return (
    <DegreesTypeWrapper>
      <ButtonCircle active={false}>°C</ButtonCircle>
      <ButtonCircle active={true}>°F</ButtonCircle>
    </DegreesTypeWrapper>
  );
};

const mapStateToProps = (state: any) => {
  return state;
};

export default connect(mapStateToProps, { getDegreeType })(TemperatureType);
