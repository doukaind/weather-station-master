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
import { getNameDegree } from "../../utils/converters";
import { AsideFooter } from "./SidebarFooter";
import Paragraph from "../text/paragraph/Paragraph";
import { ParagraphLg } from "../text/paragraph/ParagraphStyled";
import { SidebarLocation } from "./SidebarLocation";
import { MdLocationOn } from "react-icons/md";

import { connect } from "react-redux";
import { fetchCityParameters, fetchLocation } from "../../actions";
const Sidebar = ({ city, fetchLocation, fetchCityParameters }: any) => {
  console.log("PROPS: ", city);

  const isLoaded = useRef<boolean>(false);
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
      <>
        <SidebarImage src="assets/images/Snow.png" />
        <SidebarTextDegree>
          77
          <SidebarTextDegreeSecondary>
            {getNameDegree(true)}
          </SidebarTextDegreeSecondary>
        </SidebarTextDegree>
        <AsideFooter>
          <Paragraph as={ParagraphLg} third>
            Today •
          </Paragraph>
          <SidebarLocation>
            <Paragraph as={ParagraphLg} third>
              {city}
            </Paragraph>
            <MdLocationOn />
          </SidebarLocation>
        </AsideFooter>
      </>
    </SidebarWrapper>
  );
};

const mapStateToProps = (state: any) => {
  console.log("STATE: ", state);
  return { city: state.fetchLocation.title };
};

export default connect(mapStateToProps, { fetchLocation, fetchCityParameters })(
  Sidebar
);
