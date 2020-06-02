import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import {
  makeStyles,
  CssBaseline,
  Slide,
  useScrollTrigger,
  AppBar,
  Badge,
  Button,
  Toolbar,
  IconButton,
  Tooltip,
} from "@material-ui/core/";
import { fade } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import { IoIosLogIn, IoIosLogOut, IoIosPerson } from "react-icons/io";
import {
  FaMicrophone,
  FaSearch,
  FaCloudUploadAlt,
  FaShoppingCart,
  FaBell,
} from "react-icons/fa";
import { logoutUser } from "../../actions/authActions";
// import { CartContext } from "./CartContext";
import MyDrawer from "./MyDrawer";

import Media from "react-media";

//redux
import { useDispatch, useSelector } from "react-redux";
import UnauthorizedNavbar from "../navbar/UnauthorizedNavbar";
import AuthorizedNavbar from "../navbar/AuthorizedNavbar";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  logo: {
    maxwidth: "160px",
    maxHeight: "50px",
    cursor: "pointer",
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: 0,
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
    borderColor: "#74af86",
    backgroundColor: fade("#74af86", 0.15),
    "&:hover": {
      backgroundColor: fade("#74af86", 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "auto",
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

const Header = (props) => {
  let state = useSelector((state) => state);
  let auth = state.auth;
  let user = auth.user;

  const dispatch = useDispatch();
  const classes = useStyles();

  const handleLogout = () => {
    dispatch(logoutUser());
    window.location.href = "/login";
  };

  return (
    <div>
      <CssBaseline />
      <HideOnScroll>
        <AppBar style={{ backgroundColor: "#ffffff" }}>
          <Media
            query="(max-width: 800px)"
            render={() => (
              <Toolbar>
                <MyDrawer />
              </Toolbar>
            )}
          />
          <Media
            query="(min-width: 800px)"
            render={() => (
              <Toolbar>
                <img
                  src="https://res.cloudinary.com/hrishi7/image/upload/v1586783076/medcareLogo.png"
                  alt="Medicare"
                  className={classes.logo}
                  onClick={() => (window.location.href = "/")}
                />

                <div className={classes.grow} />

                <div className={classes.grow} />
                {/* navigation for unauthorized users */}
                {!auth.isAuthenticated ? (
                  <UnauthorizedNavbar classes={classes} />
                ) : (
                  <AuthorizedNavbar
                    classes={classes}
                    handleLogout={handleLogout}
                  />
                )}
              </Toolbar>
            )}
          />
        </AppBar>
      </HideOnScroll>
    </div>
  );
};

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.node.isRequired,
  window: PropTypes.func,
};
export default Header;
