import React from "react";
import { ThemeProvider } from "styled-components";

import Layout from "./layout/Layout";
import Home from "./routes/home/Home";
import theme from "./schemas/theme";
import GlobalStyled from "./styles/global";

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyled />
    <Layout>
      <Home />
    </Layout>
  </ThemeProvider>
);

export default App;
