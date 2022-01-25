import React from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { Layout } from "./layout/Layout";
import theme from "./schemas/theme";
import GlobalStyled from "./styles/global";

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyled />
    <Layout></Layout>
  </ThemeProvider>
);

export default App;
