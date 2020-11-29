import React from "react";

import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  IconButton,
  Container,
} from "@material-ui/core";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import { Link } from "react-router-dom";
import useStyles from "./styles";

import mars from "../../../assets/mars-sidebar.svg";

const CustomDrawer = ({ open, toggleDrawer }) => {
  const classes = useStyles();

  return (
    <Drawer anchor="right" open={open} onClose={toggleDrawer}>
      <Container fixed className={classes.container}>
        <Box mt={1}>
          <IconButton onClick={toggleDrawer}>
            <CloseOutlinedIcon />
          </IconButton>
        </Box>
        <List className={classes.drawer}>
          <Link to="/" className={classes.link} onClick={toggleDrawer}>
            <ListItem button>
              <ListItemText>Home</ListItemText>
            </ListItem>
          </Link>
          <Link to="/dashboard" className={classes.link} onClick={toggleDrawer}>
            <ListItem button>
              <ListItemText>Dashoboard</ListItemText>
            </ListItem>
          </Link>
        </List>

        <img
          src={mars}
          className={classes.marsSideBar}
          alt="Logo do mars"
        ></img>
      </Container>
    </Drawer>
  );
};

export default CustomDrawer;
