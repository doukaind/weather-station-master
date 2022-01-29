import React from "react";
import MainContainer from "./MainContainer";
import MainWrapper from "./MainWrapper";

type MainProps = {
  children: JSX.Element;
};

const Main: React.FC<MainProps> = ({ children }) => {
  return (
    <MainWrapper>
      <MainContainer>{children}</MainContainer>;
    </MainWrapper>
  );
};

export default Main;
