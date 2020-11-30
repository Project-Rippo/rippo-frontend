import React from "react";
import { Body, CardHeader, Title, Icon, Navigation, Text } from "./styles";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <Link
      to={props.to}
      style={{
        textDecoration: "none",
      }}
    >
      <Body>{props.children}</Body>
    </Link>
  );
};

const CardTitle = (props) => {
  return <Title color={props.color}>{props.children}</Title>;
};

const CardIcon = (props) => {
  return <Icon color={props.color} src={props.src}></Icon>;
};

const CardNavigation = (props) => {
  return <Navigation>{props.children}</Navigation>;
};

const CardText = (props) => {
  return <Text>{props.children}</Text>;
};

export { Card, CardTitle, CardIcon, CardText, CardHeader, CardNavigation };
