import React, { useEffect, useRef } from "react";
import ButtonCircle from "./ButtonCircle";
import DegreesTypeWrapper from "./TemperatureTypesWrapper";
import { connect } from "react-redux";
import { switchDegreeType } from "../../actions";

const TemperatureType = ({ isCelsius, switchDegreeType }: any) => {
  const isMounted = useRef(false);
  useEffect(() => {
    if (isMounted.current) {
      isMounted.current = true;
    }
  }, []);

  // const switchTemperatureType = () => {
  //   props.switchDegreeType();
  // };
  return (
    <DegreesTypeWrapper>
      <ButtonCircle onClick={(e: any) => switchDegreeType()} active={isCelsius}>
        °C
      </ButtonCircle>
      <ButtonCircle
        onClick={(e: any) => switchDegreeType()}
        active={!isCelsius}
      >
        °F
      </ButtonCircle>
    </DegreesTypeWrapper>
  );
};

const mapStateToProps = ({ location }: any) => {
  return { isCelsius: location.isCelsius };
};

export default connect(mapStateToProps, { switchDegreeType })(TemperatureType);
