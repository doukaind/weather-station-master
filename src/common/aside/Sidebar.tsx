import React, { useEffect, useRef } from "react";
import Navigation from "../navigation/Navigation";
import { Search } from "../navigation/Search";
import { SidebarHead } from "./SidebarHead";
import { SidebarImage } from "./SidebarImage";
import {
  SidebarTextDegree,
  SidebarTextDegreeSecondary,
} from "./SidebarTextDegree";

import SidebarWrapper from "./SidebarWrapper";
import { getNameDegree, setConvertDegrees } from "../../utils/converters";
import { AsideFooter } from "./SidebarFooter";
import Paragraph from "../text/paragraph/Paragraph";
import { ParagraphLg } from "../text/paragraph/ParagraphStyled";
import { SidebarLocation } from "./SidebarLocation";
import { MdLocationOn } from "react-icons/md";

import { connect } from "react-redux";
import { fetchCityParameters, fetchLocation } from "../../actions";
import intNumber from "../../utils/intNumber";
const Sidebar = ({
  location,
  days,
  fetchLocation,
  isCelsius,
  fetchCityParameters,
}: any) => {
  console.log("PROPS: ", days);

  const isLoaded = useRef<boolean>(false);

  const convertDegrees = setConvertDegrees(
    intNumber(days.today?.the_temp),
    isCelsius
  );
  useEffect(() => {
    if (!isLoaded.current) {
      isLoaded.current = true;
      fetchLocation();
      fetchCityParameters();
    }
  });
  return (
    <SidebarWrapper>
      <SidebarHead>
        <Navigation />
      </SidebarHead>
      {days && (
        <>
          <SidebarImage src="assets/images/Snow.png" />
          <SidebarTextDegree>
            {convertDegrees}
            <SidebarTextDegreeSecondary>
              {getNameDegree(isCelsius)}
            </SidebarTextDegreeSecondary>
          </SidebarTextDegree>
          <AsideFooter>
            <Paragraph as={ParagraphLg} third>
              Today •
            </Paragraph>
            <SidebarLocation>
              <Paragraph as={ParagraphLg} third>
                {location.city}
              </Paragraph>
              <MdLocationOn />
            </SidebarLocation>
          </AsideFooter>
        </>
      )}
    </SidebarWrapper>
  );
};

const mapStateToProps = (state: any) => {
  console.log("STATE: ", state);
  return state.location;
};

export default connect(mapStateToProps, { fetchLocation, fetchCityParameters })(
  Sidebar
);
