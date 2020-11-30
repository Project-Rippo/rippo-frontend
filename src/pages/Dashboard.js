import React, { useState, useEffect } from "react";
import SecondaryHeader from "../components/SecondaryHeader";
import moment from "moment";

import {
  Container,
  SectionTitle,
  SectionBody,
} from "../components/BodyComponents";

const Dashboard = (props) => {
  const [childInformation, setChildInformation] = useState({});
  const startOfMonth = moment().startOf("month").format("x");
  const endOfMonth = moment().endOf("month").format("x");

  const totalCrisesInMonth = () => {
    const history = childInformation.history;

    console.log(history);
    console.log(startOfMonth);
    console.log(endOfMonth);
  };

  useEffect(() => {
    setChildInformation(JSON.parse(localStorage.getItem("childInformation")));
  }, []);

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "21px" }}>
        <SecondaryHeader />
        {/* TODO: create calendar component */}

        <h1>Calendario...</h1>
      </div>
      <Container>
        <SectionBody>
          <SectionTitle>Registro diário</SectionTitle>
        </SectionBody>
        <SectionBody>
          <p>Total de crises:</p>
          {totalCrisesInMonth()}
        </SectionBody>
      </Container>
    </div>
  );
};

export default Dashboard;
