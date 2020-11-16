import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import GlobalStyle from "./styles/Global";
import Routes from "./routes";
import Header from "./components/Header";

import { Box } from "@material-ui/core";

const App = () => {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Header />
        <Box m={2}>
          <Routes />
        </Box>
      </Router>
    </>
  );
};

export default App;
