import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Typography,
  Box,
  ListItem,
  List,
  ListItemText,
  ListItemLink,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "101px",
    color: "#ffffff",
    bottom: 0,
    background: "#21314d",
  },
  logo: {
    height: "150px",
    width: "150px",
    cursor: "pointer",
  },
  copyright: {
    textAlign: "center",
    paddingTop: "10px",
    marginBottom: "2%",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid
        container
        item
        xs
        direction="row"
        style={{ marginLeft: "10%", marginRight: "10%", marginTop: "2%" }}
      ></Grid>
      <Grid item xs={12} className={classes.copyright}>
        &copy; 2019-{new Date().getFullYear()} | Product Mgmt.
      </Grid>
    </Grid>
  );
};
export default Footer;
