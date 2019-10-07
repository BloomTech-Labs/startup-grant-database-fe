// Dependencies
import axios from "axios";

// Objects
import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_ERROR,
  FILTER_GRANTS,
  FILTER_GRANTS_RESET,
  SELECT_GRANT,
  CHANGE_TAB,
  ADD_GRANT_START,
  ADD_GRANT_SUCCESS,
  ADD_GRANT_FAILURE,
  UPDATE_GRANT_START,
  UPDATE_GRANT_SUCCESS,
  UPDATE_GRANT_FAILURE,
  FILTER_SAVE,
  CHECK_ADMIN,
  SET_USER,
  SUBMIT_SUGGESTION_START,
  SUBMIT_SUGGESTION_SUCCESS,
  SUBMIT_SUGGESTION_FAILURE
} from "./types";

export const fetchApi = () => dispatch => {
  dispatch({ type: FETCH_START });
  axios
    // .get(`https://labs16-grantly.herokuapp.com/api/grants/`)
    .get(`https://grantly-staging.herokuapp.com/api/grants`)
    .then(response => {
      console.log("GET response", response);
      dispatch({ type: FETCH_SUCCESS, payload: response.data });
    })
    .catch(error => {
      console.log("GET error", error);
      dispatch({ type: FETCH_ERROR });
    });
};
export const saveFilters = filters => dispatch => {
  console.log("fil", filters);
  dispatch({ type: FILTER_SAVE, payload: filters });
};
export const filterGrants = filters => dispatch => {
  let numCheck = 0;

  Object.values(filters).map(filter => {
    filter.length !== 0 && numCheck++;
  });
  numCheck === 0
    ? dispatch({ type: FILTER_GRANTS_RESET })
    : dispatch({ type: FILTER_GRANTS, payload: filters });

  //initial thoughts is to have filters be an array  becuase users will be able to select multiple grant filter
  //Now filters will be an object that contains different arrays
};

export const selectGrant = grant => dispatch => {
  dispatch({ type: SELECT_GRANT, payload: grant });
  dispatch({ type: CHANGE_TAB, payload: 1 });
};

export const changeTab = tab => dispatch => {
  dispatch({ type: CHANGE_TAB, payload: tab });
};

// Submit a Grant
export const postGrants = addGrant => dispatch => {
  dispatch({ type: ADD_GRANT_START });
  axios
    .post("https://grantly-staging.herokuapp.com/api/grants", addGrant)
    // .post("https://labs16-grantly.herokuapp.com/api/grants/", addGrant)
    // .post("http://localhost:5000/api/grants/", addGrant)
    .then(res => {
      console.log("RES in postGrants, actions", res);
      dispatch({ type: ADD_GRANT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err.response);
      dispatch({ type: ADD_GRANT_FAILURE });
    });
};

//Update a Grant
// export const putGrants = updateGrant => dispatch => {
//   dispatch({
//     type: UPDATE_GRANT_START
//   });
//   axios
//     .put(`http://localhost:5000/api/grants/${grantId}`, updateGrant)
//     .then(res => {
//       dispatch({ type: UPDATE_GRANT_SUCCESS, payload: res.data });
//     })
//     .catch(err => console.log(err.response));
// };

//Check if user is admin
export const checkUser = user => dispatch => {
  dispatch({ type: CHECK_ADMIN });
  const auth = { ...user, auth_id: user.sub };
  console.log("SENT", JSON.stringify(auth));
  axios
    .get("http://localhost:5000/user", {
      headers: {
        auth_id: auth.auth_id
      }
    })
    .then(res => {
      console.log("Success! Data sent to Store:", res.data);
      dispatch({ type: SET_USER, payload: res.data });
    })
    .catch(err => {
      // What error code is ok to post to the db?
      const newUser = { role: "user", auth_id: auth.auth_id };
      if (err.response.status === 404) {
        axios
          .post("http://localhost:5000/user", newUser)
          .then(res => {
            console.log("POst", res);
            dispatch({ type: SET_USER, payload: res.data });
          })
          .catch(err => {
            console.log("Oops", err.response);
          });
        // console.log("checking user", user);
      }

      console.log("Error", err.response);
    });
};
//
// Submit a grant suggestion

export const submitSuggestion = suggestion => dispatch => {
  console.log("submitSuggestion suggestion", suggestion);
  dispatch({ type: SUBMIT_SUGGESTION_START });
  axios
    .post("https://grantly-staging.herokuapp.com/api/suggestion", suggestion)

    .then(response => {
      console.log("submitSuggestion response", response);
      dispatch({ type: SUBMIT_SUGGESTION_SUCCESS, payload: response.data });
    })
    .catch(error => {
      console.log("submitSuggestion error", error);
      dispatch({ type: SUBMIT_SUGGESTION_FAILURE });
    });
};
