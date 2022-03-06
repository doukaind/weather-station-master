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
import { formatDate } from "../../utils/formatDate";
import generateImage from "../../utils/generateImage";
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
    }
  });
  return (
    <SidebarWrapper>
      <SidebarHead>
        <Navigation />
      </SidebarHead>
      {Object.keys(days).length !== 0 && (
        <>
          <SidebarImage src={generateImage(days.today.weather_state_name)} />
          <SidebarTextDegree>
            {convertDegrees}
            <SidebarTextDegreeSecondary>
              {getNameDegree(isCelsius)}
            </SidebarTextDegreeSecondary>
          </SidebarTextDegree>
          <AsideFooter>
            <Paragraph as={ParagraphLg} third>
              Today • {formatDate(days.today.applicable_date)}
            </Paragraph>
            <SidebarLocation>
              <MdLocationOn />
              <Paragraph as={ParagraphLg} third>
                {location.city}
              </Paragraph>
            </SidebarLocation>
          </AsideFooter>
        </>
      )}
    </SidebarWrapper>
  );
};

const mapStateToProps = (state: any) => {
  return state.location;
};

export default connect(mapStateToProps, { fetchLocation })(Sidebar);
