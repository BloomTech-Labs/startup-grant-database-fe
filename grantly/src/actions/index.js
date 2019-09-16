// Dependencies
import axios from "axios";

// Objects
import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_ERROR,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  CREATE_START,
  CREATE_SUCCESS,
  CREATE_ERROR
} from "./types";

export const fetchApi = () => dispatch => {
  dispatch({ type: FETCH_START });
  axios
    .get(`https://api-here.com/`)
    .then(response => {
      console.log("GET response", response);
      dispatch({ type: FETCH_SUCCESS, payload: response.data });
    })
    .catch(error => {
      console.log("GET error", error);
      dispatch({ type: FETCH_ERROR });
    });
};

export const createAccount = creds => dispatch => {
  console.log("createAccount creds", creds);
  dispatch({ type: CREATE_START });
  return axios
    .post("https://api-here.com/", creds)
    .then(response => {
      console.log("createAccount response", response);
      // localStorage.setItem("token", response.data.payload);
      // dispatch({ type: CREATE_SUCCESS, payload: response.data.payload });
    })
    .catch(error => {
      console.log("createAccount error.response", error.response);
      // dispatch({ type: CREATE_ERROR, payload: error.response.data.error });
    });
};

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post("https://api-here.com/", creds)
    .then(response => {
      console.log("login response", response);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userId", response.data.user.id);
      dispatch({ type: LOGIN_SUCCESS, payload: response.data.token });
    })
    .catch(error => {
      console.log("login error.response", error.response);
      dispatch({ type: LOGIN_ERROR, payload: error.response.data.error });
    });
};
