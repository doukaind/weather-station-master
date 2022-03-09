import React from "react";
import { GeoLocationWrapper } from "./GeoLocationWrapper";
import { MdGpsFixed } from "react-icons/md";

const GeoLocation = ({ onClick }: any) => {
  return (
    <GeoLocationWrapper
      title="Location"
      aria-label="Current Location"
      onClick={onClick}
    >
      <MdGpsFixed size={22} />
    </GeoLocationWrapper>
  );
};

export default GeoLocation;
