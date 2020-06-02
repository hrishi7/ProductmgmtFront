// import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

//set loggedin user
export const setCurrentUser = (token) => (dispatch) => {
  localStorage.setItem("jwtToken", token);
  const decoded = jwt_decode(token);
  dispatch({
    type: "SET_CURRENT_USER",
    payload: decoded,
  });
};

// Log user out
export const logoutUser = () => (dispatch) => {
  // Remove token from localStorage
  localStorage.removeItem("jwtToken");
  //   dispatch({
  //     type: "GET_ORDERS",
  //     payload: [],
  //   });
  //   dispatch({
  //     type: "SELLER_ORDERS",
  //     payload: [],
  //   });
  //   dispatch({
  //     type: "CLEAR_CART",
  //     payload: {},
  //   });
  dispatch({
    type: "SET_CURRENT_USER",
    payload: {},
  });
  // // Remove auth header for future requests
  // setAuthToken(false);
  // // Set current user to {} which will set isAuthenticated to false
  // dispatch(setCurrentUser({}));
};
