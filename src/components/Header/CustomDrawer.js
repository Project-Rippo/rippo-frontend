import React from "react";

import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  IconButton,
} from "@material-ui/core";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import { Link } from "react-router-dom";
import useStyles from "./styles";

const CustomDrawer = ({ open, toggleDrawer }) => {
  const classes = useStyles();

  return (
    <Drawer anchor="right" open={open} onClose={toggleDrawer}>
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
    </Drawer>
  );
};

export default CustomDrawer;
