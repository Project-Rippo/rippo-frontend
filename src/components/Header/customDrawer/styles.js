import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  drawer: {
    minWidth: "250px",
  },
  link: {
    textDecoration: "none",
    color: "black",
  },
  container: {
    height: "100%",
    padding: "0",
    paddingTop: "70px",
    position: "relative",
  },
  marsSideBar: {
    position: "absolute",
    bottom: "0",
  },
}));

export default useStyles;
