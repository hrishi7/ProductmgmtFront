import React from "react";
import "./App.css";
import Footer from "./components/common/Footer";
import { makeStyles } from "@material-ui/core/";
import { fade } from "@material-ui/core/styles";
import MainRoute from "./components/common/MainRoute";

import Header from "./components/common/Header";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  logo: {
    maxwidth: "160px",
    maxHeight: "50px",
  },
  content: {
    flex: 1,
    backgroundColor: theme.palette.background.default,
    padding: 0,
    height: "100%",
    // minHeight: "555px",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  toolbar: theme.mixins.toolbar,
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade("#005aff", 0.15),
    "&:hover": {
      backgroundColor: fade("#005aff", 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200,
    },
  },
  margin: {
    paddingTop: theme.spacing(2),
  },
  anchor: {
    textDecoration: "none",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div style={{ background: "#ecf0f3" }}>
      <Header />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <MainRoute />
      </main>
      <br />
      <Footer />
    </div>
  );
}

export default App;
