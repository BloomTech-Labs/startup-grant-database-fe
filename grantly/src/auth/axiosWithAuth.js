import axios from "axios";

//axios call that attaches token to the call
export const axiosWithAuth = token => {
  return axios.create({
    headers: {
      authorization: `Bearer ${token}`
    },
    baseURL: process.env.REACT_APP_CLIENT_STAGINGURL
  });
};
