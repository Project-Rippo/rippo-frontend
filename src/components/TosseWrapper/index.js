import React from "react";

import IntensityChart from "../IntensityChart";
import IncidenceChart from "../IncidenceChart";
import { Container, Title, Text } from "./styles";

const TosseWrapper = () => {
  return (
    <Container direction="column">
      <Title>Intensidade da tosse</Title>
      <Text>Atualização em tempo real</Text>
      <div
        style={{
          marginTop: "25px",
          background: "#f7f7f7",
          outline: "10px solid #f7f7f7",
          padding: 0,
        }}
      >
        <IntensityChart
          title="Intensidade da tosse"
          labels={[0, 1, 2, 3, 4, 5]}
          data={[0, 1, 2, 3, 1, 2]}
          ytitle={"Nível da Tosse"}
          xtitle={"Horários do dia"}
        />
      </div>

      <Title style={{ marginTop: "25px" }}>Incidência de Tosse</Title>
      <Text>Atualização em tempo real</Text>
      <div
        style={{
          marginTop: "25px",
          background: "#f7f7f7",
          outline: "10px solid #f7f7f7",
        }}
      >
        <IncidenceChart
          title="Intensidade da tosse"
          labels={["Sem Tosse", "Tosse Leve", "Tosse Moderada", "Tosse Intensa"]}
          data={[10, 20, 30, 40]}
          ytitle={"Nível da Tosse"}
          xtitle={"Horários do dia"}
        />
      </div>
    </Container>
  );
};

export default TosseWrapper;
