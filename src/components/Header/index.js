import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar, Typography, IconButton } from "@material-ui/core";
import { withRouter } from "react-router";

import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "./styles";

import CustomDrawer from "./CustomDrawer";

const Header = (props) => {
  const classes = useStyles();
  const { location } = props;

  const [drawer, setdrawer] = useState(false);

  const toggleDrawer = () => {
    setdrawer(!drawer);
  };

  const pathName = (name) => {
    switch (name) {
      case "/dashboard":
        return "Dashbord";

      default:
        return "Home";
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            {pathName(location.pathname)}
          </Typography>
          <IconButton
            onClick={toggleDrawer}
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <CustomDrawer open={drawer} toggleDrawer={toggleDrawer} />
    </div>
  );
};

export default withRouter(Header);
