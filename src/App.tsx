import React from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import GlobalStyled from "./styles/global";

const App = () => (
  <ThemeProvider theme={}>
    <GlobalStyled />
  </ThemeProvider>
);

export default App;
