import React from "react";

import { Card, Text, Navigation, Icon } from "./styles";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";

const SympthonsCard = (props) => {
  return (
    <Card>
      <Icon src={props.icon}></Icon>
      <Text>{props.children}</Text>
      <Navigation>
        <ArrowForwardIosOutlinedIcon
          style={{ color: "white" }}
          fontSize="small"
        />
      </Navigation>
    </Card>
  );
};

export default SympthonsCard;
