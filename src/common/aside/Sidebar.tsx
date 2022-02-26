import React from "react";
import { Search } from "../navigation/Search";
import SidebarWrapper from "./SidebarWrapper";

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <Search>Search for places</Search>
    </SidebarWrapper>
  );
};

export default Sidebar;
