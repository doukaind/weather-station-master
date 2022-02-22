import React, { useEffect, useRef } from "react";
import ButtonCircle from "./ButtonCircle";
import DegreesTypeWrapper from "./TemperatureTypesWrapper";
import { connect } from "react-redux";
import { switchDegreeType } from "../../actions";

const TemperatureType = (props: any) => {
  const isMounted = useRef(false);
  useEffect(() => {
    props.switchDegreeType();
    if (isMounted.current) {
      isMounted.current = true;
      props.getDegreeType();
    }
  }, []);

  const switchTemperatureType = () => {
    props.switchDegreeType();
  };
  return (
    <DegreesTypeWrapper>
      <ButtonCircle
        onClick={(e: any) => props.switchDegreeType()}
        active={props.temperature}
      >
        °C
      </ButtonCircle>
      <ButtonCircle
        onClick={(e: any) => props.switchDegreeType()}
        active={!props.temperature}
      >
        °F
      </ButtonCircle>
    </DegreesTypeWrapper>
  );
};

const mapStateToProps = ({ temperature }: any) => {
  // console.log("STATE: ", state);
  return { temperature };
};

export default connect(mapStateToProps, { switchDegreeType })(TemperatureType);
