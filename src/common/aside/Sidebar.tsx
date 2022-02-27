import React from "react";
import Navigation from "../navigation/Navigation";
import { Search } from "../navigation/Search";
import { SidebarHead } from "./SidebarHead";
import { SidebarImage } from "./SidebarImage";
import SidebarWrapper from "./SidebarWrapper";

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <SidebarHead>
        <Navigation />
      </SidebarHead>
      <>
        <SidebarImage src="assets/images/Snow.png" />
      </>
    </SidebarWrapper>
  );
};

export default Sidebar;
