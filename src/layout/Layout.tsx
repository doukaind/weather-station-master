import React from "react";
import Main from "../common/main/Main";
import Aside from "../common/aside/Aside";
import LayoutWrapper from "./LayoutWrapper";

const Layout = () => {
  return (
    <LayoutWrapper>
      <Aside />
      <Main></Main>
    </LayoutWrapper>
  );
};

export default Layout;
