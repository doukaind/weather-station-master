import React from "react";
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
const Sidebar = () => {
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
            <MdLocationOn />
            <Paragraph as={ParagraphLg} third>
              Warsaw
            </Paragraph>
          </SidebarLocation>
        </AsideFooter>
      </>
    </SidebarWrapper>
  );
};

const mapStateToProps = (state: any) => {};

export default Sidebar;
