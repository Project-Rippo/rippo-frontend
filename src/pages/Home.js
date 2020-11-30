import React from "react";
import {
  Card,
  CardTitle,
  CardIcon,
  CardHeader,
  CardText,
} from "../components/NavigationCard";

import Header from "../components/Header";

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
    case 0:
      break;
    case 1:
      break;
    case 2:
      break;
    case 3:
      break;
    default:
      break;
  }
};

const getStatusColor = (status) => {
  switch (status) {
    case 0:
      break;
    case 1:
      break;
    case 2:
      break;
    case 3:
      break;
    default:
      break;
  }
};

const Home = () => {
  return (
    <>
      <Header />
      <Box m={2}>
        <Card>
          <CardHeader icon={hearth} disableNavigation>
            <CardTitle color="#323232" center size="24px">
              Status atual da criança
            </CardTitle>
          </CardHeader>
          <CardText>
            Foram detectados leves sinais de tosse ao longo do dia.
          </CardText>
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
