import React, { useState, useEffect } from "react";
import { Grid, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import "./loginStyle.css";
import { proxy } from "../../proxy";
import axios from "axios";

import { setCurrentUser } from "../../actions/authActions";

const Login = () => {
  let isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  useSelector((state) => console.log(state));

  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      window.location.href = "/invoice-details";
    }
  }, []);

  const handleLogin = async () => {
    let response = await axios.post(`${proxy}/api/auth/login`, {
      email,
      password,
    });
    dispatch(setCurrentUser(response.data.token));
    window.location.href = "/invoice-details";
  };
  return (
    <Grid container style={{ background: "#ecf0f3" }}>
      <Grid item xs>
        <center>
          <Paper
            style={{
              width: "430px",
              height: "420px",
              padding: "60px 35px 35px 35px",
              borderRadius: "40px",
              background: "#ecf0f3",
              marginTop: "10px",
              marginBottom: "10px",
              boxShadow: "13px 13px 20px #cbced1, -13px -13px 20px #ffffff",
            }}
          >
            <div class="title">Login</div>
            <div class="fields">
              <div class="username">
                <input
                  type="email"
                  class="user-input"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="password">
                <input
                  type="password"
                  class="pass-input"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <button class="signin-button" onClick={() => handleLogin()}>
              Login
            </button>
          </Paper>
        </center>
      </Grid>

      {/* <Grid item xs>
      <Paper className={classes.paper}>xs</Paper>
    </Grid>
    <Grid item xs>
      <Paper className={classes.paper}>xs</Paper>
    </Grid> */}
    </Grid>
  );
};

export default Login;
