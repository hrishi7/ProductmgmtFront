import React from "react";
import PropTypes from "prop-types";
import {
  makeStyles,
  CssBaseline,
  Slide,
  InputBase,
  Badge,
  useScrollTrigger,
  AppBar,
  Button,
  Toolbar,
  IconButton,
  Tooltip,
} from "@material-ui/core/";
import { fade } from "@material-ui/core/styles";
import { Provider } from "react-redux";
import { IoIosLogIn, IoIosLogOut, IoIosPerson } from "react-icons/io";
import { FaPlusCircle } from "react-icons/fa";
import {
  FaMicrophone,
  FaSearch,
  FaCloudUploadAlt,
  FaShoppingCart,
  FaBell,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const AuthorizedNavbar = (props) => {
  const { classes, handleLogout } = props;
  return (
    <div>
      <Tooltip title="Invoice Details">
        <IconButton
          style={{ color: "#32a060" }}
          color="primary"
          onClick={() => (window.location.href = "/invoice-details")}
        >
          <FaPlusCircle />
        </IconButton>
      </Tooltip>
      <Tooltip title="Daily Usage">
        <IconButton
          style={{ color: "#32a060" }}
          color="primary"
          onClick={() => (window.location.href = "/daily-usage")}
        >
          <IoIosLogIn />
        </IconButton>
      </Tooltip>
      <Tooltip title="Logout">
        <IconButton
          style={{ color: "#32a060" }}
          color="primary"
          onClick={() => handleLogout()}
        >
          <IoIosLogOut />
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default AuthorizedNavbar;
