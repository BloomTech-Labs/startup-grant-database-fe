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
  DELETE_GRANT_START,
  DELETE_GRANT_SUCCESS,
  DELETE_GRANT_FAILURE,
  FILTER_SAVE,
  CHECK_ADMIN,
  SET_USER,
  SET_TOKEN_IN_STORE,
  SUBMIT_SUGGESTION_START,
  SUBMIT_SUGGESTION_SUCCESS,
  SUBMIT_SUGGESTION_FAILURE,
  DELETE_SUGGESTION_START,
  DELETE_SUGGESTION_SUCCESS,
  DELETE_SUGGESTION_FAILURE
} from "./types";

export const fetchApi = () => dispatch => {
  dispatch({ type: FETCH_START });
  axios
    // .get(`https://labs16-grantly.herokuapp.com/api/grants/`)
    .get(`https://grantly-staging.herokuapp.com/api/grants`)
    // .get(`http://localhost:5000/api/grants`)

    .then(response => {
      dispatch({ type: FETCH_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: FETCH_ERROR });
    });
};

export const adminFetchApi = user => dispatch => {
  dispatch({ type: FETCH_START });
  axios
    .get(`https://grantly-staging.herokuapp.com/api/admin`, {
      headers: { auth0id: user.auth_id, authorization: `Bearer ${user.token}` }
    })

    .then(response => {
      dispatch({ type: FETCH_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: FETCH_ERROR });
    });
};
// This action creator is here because we want to save filters that user selected on landing poge screen so we save our filters into our reducer
export const saveFilters = filters => dispatch => {
  dispatch({ type: FILTER_SAVE, payload: filters });
};
export const filterGrants = filters => dispatch => {
  let numCheck = 0;

  //See hoe many filters user selected
  Object.values(filters).map(filter => {
    filter.length !== 0 && numCheck++;
  });

  //Check if user has chosen any flters if there is one selected dispatches the filter grants action or it none is select it shows all grants from the filter grants reset action
  numCheck === 0
    ? dispatch({ type: FILTER_GRANTS_RESET })
    : dispatch({ type: FILTER_GRANTS, payload: filters });
};

export const selectGrant = grant => dispatch => {
  dispatch({ type: SELECT_GRANT, payload: grant });
  dispatch({ type: CHANGE_TAB, payload: 1 });
};

// This action creator is for mobile, we use this in different components like the aubmit form to change the current tab a user is on after submitting
export const changeTab = tab => dispatch => {
  dispatch({ type: CHANGE_TAB, payload: tab });
};

// Submit a Grant
export const postGrants = addGrant => dispatch => {
  dispatch({ type: ADD_GRANT_START });
  axios
    .post("https://grantly-staging.herokuapp.com/api/grants", addGrant)
    // .post("http://localhost:5000/api/grants", addGrant)
    // .post("https://labs16-grantly.herokuapp.com/api/grants/", addGrant)

    .then(res => {
      dispatch({ type: ADD_GRANT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      // console.log(err.response);
      dispatch({ type: ADD_GRANT_FAILURE });
    });
};

// Update a Grant
export const putGrants = (updateGrant, user) => dispatch => {
  dispatch({
    type: UPDATE_GRANT_START
  });
  axios
    .put(
      `https://grantly-staging.herokuapp.com/api/admin/${updateGrant.id}`,
      updateGrant,
      {
        headers: {
          auth0id: user.auth_id,
          authorization: `Bearer ${user.token}`
        }
      }
    )

    .then(success => {
      axios
        // .get(`https://labs16-grantly.herokuapp.com/api/grants/`)
        .get(`https://grantly-staging.herokuapp.com/api/admin`, {
          headers: {
            auth0id: user.auth_id,
            authorization: `Bearer ${user.token}`
          }
        })

        .then(response => {
          console.log("response", response)
          dispatch({
            type: UPDATE_GRANT_SUCCESS,
            payload: [response.data, updateGrant.id]
          });
        })
        .catch(error => {
          dispatch({ type: UPDATE_GRANT_FAILURE, payload: error });
        });
    })
    .catch(err => {
      dispatch({ type: UPDATE_GRANT_FAILURE, payload: err });
    });
};

// Delete A grant

export const deleteGrants = (id, user) => dispatch => {
  dispatch({
    type: DELETE_GRANT_START
  });
  axios
    .delete(`https://grantly-staging.herokuapp.com/api/admin/${id}`, {
      headers: {
        auth0id: user.auth_id,
        authorization: `Bearer ${user.token}`
      }
    })

    .then(res => {
      axios
        // .get(`https://labs16-grantly.herokuapp.com/api/grants/`)
        .get(`https://grantly-staging.herokuapp.com/api/admin`, {
          headers: {
            auth0id: user.auth_id,
            authorization: `Bearer ${user.token}`
          }
        })

        .then(response => {
          dispatch({
            type: DELETE_GRANT_SUCCESS,
            payload: response.data
          });
        })
        .catch(error => {
          dispatch({ type: DELETE_GRANT_FAILURE, payload: error });
        });
    })
    .catch(err => {
      dispatch({ type: DELETE_GRANT_FAILURE, payload: err });
    });
};

//Check if user is admin this action is called after a successful login
export const checkUser = user => dispatch => {
  dispatch({ type: CHECK_ADMIN }); 
  const auth = { ...user, auth_id: user.sub };

  // First we call to our user database, we pass in the auth0 id provided by auth0 into our headers and our response will be an object detailing if
  // the current signed in user is an admin or not
  axios
    .get("https://grantly-staging.herokuapp.com/user", {
      headers: {
        auth_id: auth.auth_id
      }
    })
    .then(res => {
      dispatch({ type: SET_USER, payload: res.data });
      dispatch({ type: SET_TOKEN_IN_STORE, payload: user.token }); 
    })
    .catch(err => {
      //Possibly for a future release will be to update our user database with the email and name provided by auth0
      // const newUser = { role: "user", auth_id: auth.auth_id, email: user.email, last_name: user.family_name, first_name: user.given_name};

      // After a user successfully logs in if we do not have their auth0 id in our database we will create that user in our catch block. So first time users will be added to our db as users
      const newUser = { role: "user", auth_id: auth.auth_id };
      if (err.response.status === 404) {
        axios

          .post("https://grantly-staging.herokuapp.com/user", newUser)
          .then(res => {
            dispatch({ type: SET_USER, payload: res.data });
          })
          .catch(err => {});
      }
    });
};

export const submitSuggestion = suggestion => dispatch => {
  dispatch({ type: SUBMIT_SUGGESTION_START });
  axios
    .post(
      "https://grantly-staging.herokuapp.com/api/grants/suggestion",
      suggestion
    )

    .then(response => {
      dispatch({ type: SUBMIT_SUGGESTION_SUCCESS, payload: response.data });
    })
    .catch(error => {
      console.log("submitSuggestion error", error);
      dispatch({ type: SUBMIT_SUGGESTION_FAILURE });
    });
};

// Delete a grant suggestion
export const deleteSuggestion = (requestId, user) => dispatch => {
  dispatch({ type: DELETE_SUGGESTION_START });
  axios
    .delete(
      `https://grantly-staging.herokuapp.com/api/admin/suggestion/${requestId}`,
      {
        headers: {
          auth0id: user.auth_id,
          authorization: `Bearer ${user.token}`
        }
      }
    )

    .then(response => {
      dispatch({ type: DELETE_SUGGESTION_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: DELETE_SUGGESTION_FAILURE });
    });
};
