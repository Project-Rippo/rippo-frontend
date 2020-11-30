import React, { useState, useEffect } from "react";
import SecondaryHeader from "../components/SecondaryHeader";
import moment from "moment";

import {
  Container,
  SectionTitle,
  SectionBody,
  ChildInformation,
  Row,
} from "../components/BodyComponents";

import SympthonsCard from "../components/sympthonsCard";

import weightIcon from "../assets/Weight.svg";
import heightIcon from "../assets/height.svg";
import childIcon from "../assets/childIcon.svg";
import ar from "../assets/ar.svg";
import bombinha from "../assets/bombinha.svg";
import pulmao from "../assets/pulmao.svg";
import tosse from "../assets/tosse.svg";

const Dashboard = (props) => {
  const [childInformation, setChildInformation] = useState({});

  const startOfMonth = moment().startOf("month").format("x");
  const endOfMonth = moment().endOf("month").format("x");

  const totalCrisesInMonth = () => {
    const history = childInformation.history ? childInformation.history : [];

    const count = history.reduce((accumulator, currentValue) => {
      if (
        currentValue.asthmaAttack &&
        currentValue.createdAt > startOfMonth &&
        currentValue.createdAt < endOfMonth
      ) {
        return accumulator + 1;
      }

      return accumulator;
    }, 0);

    return count;
  };

  const getChildAge = () => {
    const birthdate = childInformation.birthdate;
    const now = moment(new Date(), "DD/MM/YYYY");
    const age = now.diff(moment(birthdate, "DD/MM/YYYY"), "years");

    return age;
  };

  useEffect(() => {
    setChildInformation(JSON.parse(localStorage.getItem("childInformation")));
  }, []);

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <div style={{ padding: "21px" }}>
        {/* TODO: create calendar component */}
        <SecondaryHeader />

        {/* <h1>Calendario...</h1> */}
      </div>
      <Container>
        <SectionBody>
          <SectionTitle>Registro diário</SectionTitle>
        </SectionBody>
        <SectionBody>
          <p
            style={{
              fontSize: "13px",
              color: "#323232",
            }}
          >
            Total de crises
          </p>
          <p
            style={{
              color: "#4490C7",
              fontSize: "18px",
            }}
          >
            {totalCrisesInMonth()} crises no mês
          </p>
          <Row>
            <ChildInformation image={weightIcon}>
              {childInformation.weight} kg
            </ChildInformation>
            <ChildInformation image={heightIcon}>
              {childInformation.height} cm
            </ChildInformation>
            <ChildInformation image={childIcon}>
              {getChildAge()} anos
            </ChildInformation>
          </Row>
        </SectionBody>

        <SympthonsCard icon={ar}>Crises</SympthonsCard>
        <SympthonsCard icon={bombinha}>Tosse</SympthonsCard>
        <SympthonsCard icon={pulmao}>Sibilo</SympthonsCard>
        <SympthonsCard icon={tosse}>Fluxo de Ar</SympthonsCard>
      </Container>
    </div>
  );
};

export default Dashboard;
