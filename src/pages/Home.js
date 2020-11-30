import React from "react";
import {
  Card,
  CardTitle,
  CardIcon,
  CardHeader,
  CardText,
  CardNavigation,
} from "../components/NavigationCard";

import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";

import Header from "../components/Header";

import { Box } from "@material-ui/core";
import barGraph from "../assets/barGraph.svg";

const Home = () => {
  return (
    <>
      <Header />
      <Box m={2}>
        <Card to="/dashboard">
          <CardHeader>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <img src={barGraph} alt="Bar Graph"></img>

              <CardTitle color="#A3C744">Estatísticas</CardTitle>
            </div>
            <CardNavigation>
              <ArrowForwardIosOutlinedIcon
                style={{
                  color: "#fff",
                }}
              />
            </CardNavigation>
          </CardHeader>
          <CardText>
            <p>
              Veja mais detalhes sobre o <br />
              acompanhamento
            </p>
          </CardText>
        </Card>
      </Box>
    </>
  );
};

export default Home;
