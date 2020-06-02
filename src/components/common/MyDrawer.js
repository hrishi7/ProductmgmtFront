import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import {
  IconButton,
  Paper,
  Grid,
  Typography,
  Box,
  Badge,
} from "@material-ui/core/";
import { FaBars } from "react-icons/fa";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { useSelector, useDispatch } from "react-redux";

import { logoutUser } from "../../actions/authActions";

import { FaPlusCircle, FaShoppingCart, FaBell, FaListUl } from "react-icons/fa";
import { IoIosLogIn, IoIosPerson, IoIosLogOut } from "react-icons/io";
import { MdUpdate, MdAddCircle, MdDashboard, MdReorder } from "react-icons/md";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  logo: {
    cursor: "pointer",
    maxwidth: "160px",
    maxHeight: "50px",
    cursor: "pointer",
  },
  logoS: {
    marginTop: "5px",
    width: "100px",
    height: "100px",
    alignSelf: "center",
    justifyContent: "center",
    justifySelf: "center",
  },
});

const MyDrawer = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const auth = state.auth;
  const user = state.auth.user;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (status) => {
    setOpen(status);
  };

  const unauthorizednavbar = () => {
    return (
      <Grid container item direction="column" style={{ height: "100%" }}>
        <img
          src="https://res.cloudinary.com/hrishi7/image/upload/v1586783076/medcareLogo.png"
          alt="Medicare"
          className={classes.logoS}
          onClick={() => (window.location.href = "/")}
        />
        <Typography variant="h6" align="center" style={{ color: "#21314d" }}>
          <Box fontWeight="fontWeightBold" p={1}>
            Welcome Guest
          </Box>
        </Typography>

        <List>
          <ListItem button onClick={() => (window.location.href = "/login")}>
            <ListItemIcon
              style={{
                color: "#21314d",
                marginLeft: "25%",
                marginRight: "-10%",
              }}
            >
              <IoIosLogIn size={25} />
            </ListItemIcon>
            <ListItemText primary="Login" />
          </ListItem>
        </List>
        <Typography
          variant="subtitle1"
          style={{
            color: "#21314d",
            padding: "5px",
            position: "absolute",
            bottom: "0px",
            right: "25%",
            left: "50%",
            marginLeft: "-67px",
          }}
        >
          Medcare @ v1.1
        </Typography>
      </Grid>
    );
  };

  const authorizednavbar = () => {
    return (
      <Grid container item direction="column" style={{ height: "100%" }}>
        <img
          src="https://res.cloudinary.com/hrishi7/image/upload/v1586783076/medcareLogo.png"
          alt="Medicare"
          className={classes.logoS}
          onClick={() => (window.location.href = "/")}
        />
        <Typography variant="h6" align="center" style={{ color: "#21314d" }}>
          <Box fontWeight="fontWeightBold" p={1}>
            Welcome {user.name}
          </Box>
        </Typography>

        <List>
          <ListItem
            button
            onClick={() => (window.location.href = "/invoice-details")}
          >
            <ListItemIcon
              style={{
                color: "#21314d",
                marginLeft: "25%",
                marginRight: "-10%",
              }}
            >
              <IoIosLogIn size={25} />
            </ListItemIcon>
            <ListItemText primary="Invoice Details" />
          </ListItem>
          <ListItem
            button
            onClick={() => (window.location.href = "/daily-usage")}
          >
            <ListItemIcon
              style={{
                color: "#21314d",
                marginLeft: "25%",
                marginRight: "-10%",
              }}
            >
              <IoIosLogIn size={25} />
            </ListItemIcon>
            <ListItemText primary="Daily Usage" />
          </ListItem>
          <ListItem button onClick={() => logoutUser()}>
            <ListItemIcon
              style={{
                color: "#21314d",
                marginLeft: "25%",
                marginRight: "-10%",
              }}
            >
              <IoIosLogOut size={25} />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
        <Typography
          variant="subtitle1"
          style={{
            color: "#21314d",
            padding: "5px",
            position: "absolute",
            bottom: "0px",
            right: "25%",
            left: "50%",
            marginLeft: "-67px",
          }}
        >
          Medcare @ v1.1
        </Typography>
      </Grid>
    );
  };

  return (
    <React.Fragment>
      <IconButton
        onClick={() => toggleDrawer(true)}
        edge="start"
        style={{ color: "21314d" }}
        aria-label="menu"
      >
        <FaBars />
      </IconButton>
      <Drawer open={open} onClose={() => toggleDrawer(false)}>
        <div
          style={{
            minWidth: "250px",
            backgroundColor: "#f2f2f2",
            height: "100%",
          }}
          onClick={() => toggleDrawer(false)}
          onKeyDown={() => toggleDrawer(false)}
        >
          {!auth.isAuthenticated ? unauthorizednavbar() : authorizednavbar()}
        </div>
      </Drawer>
      <img
        src="https://res.cloudinary.com/hrishi7/image/upload/v1586783076/medcareLogo.png"
        alt="Medicare"
        className={classes.logo}
        onClick={() => (window.location.href = "/")}
      />
    </React.Fragment>
  );
};

export default MyDrawer;
