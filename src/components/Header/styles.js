import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#8ad144",
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontWeight: "bold",
  },
  drawer: {
    minWidth: "220px",
  },
  link: {
    textDecoration: "none",
    color: "black",
  },
}));

export default useStyles;
