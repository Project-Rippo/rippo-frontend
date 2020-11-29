import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { API } from "aws-amplify";
import * as queries from "./graphql/queries";

import { Backdrop } from "@material-ui/core";

import GlobalStyle from "./styles/Global";
import Routes from "./routes";
import Header from "./components/Header";

import { Box } from "@material-ui/core";
import animatedLogo from "./assets/ripple-animated.gif";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#fff",
  },

  logo: {
    width: "322px",
  },
}));

const App = () => {
  const [loader, setLoader] = useState(false);
  const [basicInformation, setbasicInformation] = useState(false);

  const classes = useStyles();

  const fetchIntialInformation = async () => {
    handleLoader(true);

    try {
      const request = await API.graphql({
        query: queries.getParent,
        variables: { id: "8cc20854-45ca-43f0-84ce-e9c4fa0ec98f" },
      });
      const parentRequest = await request.data.getParent;

      localStorage.setItem("parentInformation", JSON.stringify(parentRequest));
    } catch (error) {
      console.log("Error fetching parent Information: ", error);
    }

    try {
      const request = await API.graphql({
        query: queries.getChild,
        variables: { id: "ee0260e0-d65d-43d1-9c79-b65b9f862487" },
      });
      const childRequest = await request.data.getChild;

      localStorage.setItem("childInformation", JSON.stringify(childRequest));
    } catch (error) {
      console.log("Error fetching child Information: ", error);
    }

    setbasicInformation(true);
    handleLoader(false);
  };

  const handleLoader = (state) => {
    setLoader(state);
  };

  useEffect(() => {
    fetchIntialInformation();
  }, []);

  return (
    <>
      <Backdrop className={classes.backdrop} open={loader}>
        <img
          src={animatedLogo}
          className={classes.logo}
          alt="Gif projeto rippo"
        ></img>
      </Backdrop>

      {basicInformation ? (
        <Router>
          <GlobalStyle />
          <Header />
          <Box m={2}>
            <Routes />
          </Box>
        </Router>
      ) : null}
    </>
  );
};

export default App;
