import React, { useEffect, useRef, useState } from "react";
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
import {
  fetchCityParameters,
  fetchLocation,
  fetchSearch,
  setSearchCity,
} from "../../actions";
import intNumber from "../../utils/intNumber";
import { formatDate } from "../../utils/formatDate";
import generateImage from "../../utils/generateImage";
import GeoLocation from "../geoLocation/GeoLocation";
import Alert from "../alert/Alert";
import useLocation from "../../hooks/useLocation";
const Sidebar = ({
  location,
  days,
  fetchLocation,
  isCelsius,
  fetchCityParameters,
  currentGeo,
  searchCity,
  fetchSearch,
}: any) => {
  console.log("PROPS: ", days, "current geo: ", currentGeo);

  const isLoaded = useRef<boolean>(false);
  const [alert, setAlert] = useState(false);
  const { geoLocation } = useLocation();
  const convertDegrees = setConvertDegrees(
    intNumber(days.today?.the_temp),
    isCelsius
  );

  const handleSearch = () => {
    // if (!isCelsius) handleCelsius();
    if (!Object.keys(currentGeo).length) {
      geoLocation();
      fetchSearch();
      showAlert();
    } else {
      fetchSearch();
      searchCity(currentGeo);
    }
  };
  const showAlert = () => {
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  };

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
        <GeoLocation onClick={handleSearch} />
        {alert && <Alert text="You must allow your location!!" />}
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

export default connect(mapStateToProps, {
  fetchLocation,
  searchCity: setSearchCity,
  fetchSearch,
})(Sidebar);
