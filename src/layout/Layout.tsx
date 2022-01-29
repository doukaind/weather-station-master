import React from "react";
import Main from "../common/main/Main";
import Sidebar from "../common/aside/Sidebar";
import LayoutWrapper from "./LayoutWrapper";
import Home from "../routes/home/Home";

type LayoutProps = {
  children: JSX.Element;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutWrapper>
      <Sidebar />
      <Main>{children}</Main>
    </LayoutWrapper>
  );
};

export default Layout;
