import React, { useState, useEffect } from "react";
import {
  Card,
  CardTitle,
  CardIcon,
  CardHeader,
  CardText,
} from "../components/NavigationCard";

import Header from "../components/Header";
import ChildStatus from "../components/ChildStatus";

import { Box } from "@material-ui/core";
import barGraph from "../assets/barGraph.svg";
import hearth from "../assets/hearth.svg";

// function to show child status
// Tosse Leve, Fluxo de Ar leve = 1
// Tosse Moderada, Fluxo de Ar Moderada = 2
// Tosse Intesa, Fluxo de Ar Inteso, Sibilo = 3
// else: 0
const getStatus = (status) => {
  return;
};

const getStatusText = (status) => {
  switch (status) {
    case 1:
      return "Foram identificados sintomas leves e espaçados";
    case 2:
      return "A criança apresentou sintomas de intensidade moderada, mas sem registro de sibilo";
    case 3:
      return "A criança apresentou sintomas graves e de alta intensidade, com registro de sibilo";
    default:
      return "A criança não presentou sintomas";
  }
};

const getStatusColor = (status) => {
  switch (status) {
    case 1:
      return "#EAC91B";
    case 2:
      return "#FF9800";
    case 3:
      return "#CA1E3D";
    default:
      return "#A3C744";
  }
};

const Home = () => {
  const [childInformation, setChildInformation] = useState({});

  useEffect(() => {
    setChildInformation(JSON.parse(localStorage.getItem("childInformation")));
  }, []);

  return (
    <>
      <Header />
      <Box m={2}>
        <Card disableNavigation>
          <CardHeader icon={hearth} disableNavigation>
            <CardTitle color="#323232" center size="24px">
              Status atual da criança
            </CardTitle>
          </CardHeader>
          <CardText>
            Foram detectados leves sinais de tosse ao longo do dia.
          </CardText>

          <div
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ChildStatus color={"#A3C744"} />
          </div>
        </Card>

        <Card to="/dashboard">
          <CardHeader icon={barGraph}>
            <CardTitle color="#A3C744">Estatísticas</CardTitle>
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
