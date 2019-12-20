// Dependencies
import axios from "axios";
import { axiosWithAuth } from "../auth/axiosWithAuth.js";
// import useGetToken from "../auth/useGetToken.js";

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
  CHECK_ADMIN,
  SET_USER,
  SET_TOKEN_IN_STORE,
  FILTER_SAVE,
  SUBMIT_SUGGESTION_START,
  SUBMIT_SUGGESTION_SUCCESS,
  SUBMIT_SUGGESTION_FAILURE,
  DELETE_SUGGESTION_START,
  DELETE_SUGGESTION_SUCCESS,
  DELETE_SUGGESTION_FAILURE,
  GET_SUGGESTIONS_SUCCESS,
  SUBMIT_FAVORITE_START,
  SUBMIT_FAVORITE_SUCCESS,
  SUBMIT_FAVORITE_FAILURE,
  GET_FAVORITE_START,
  GET_FAVORITE_SUCCESS,
  GET_FAVORITE_FAILURE,
  DELETE_FAVORITE_START,
  DELETE_FAVORITE_SUCCESS,
  DELETE_FAVORITE_FAILURE
} from "./types";

// fetch grants for main view
export const fetchApi = () => dispatch => {
  dispatch({ type: FETCH_START });
  axios
    .get(`${process.env.REACT_APP_CLIENT_STAGINGURL}/grants`)
    .then(response => {
      dispatch({ type: FETCH_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: FETCH_ERROR });
    });
};
// fetch grants for admin
export const adminFetchApi = token => dispatch => {
  dispatch({ type: FETCH_START });
  axios
    .get(`${process.env.REACT_APP_CLIENT_STAGINGURL}/admin`, {
      headers: { authorization: `Bearer ${token}` }
    })
    .then(response => {
      dispatch({ type: FETCH_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: FETCH_ERROR });
    });
};
// This action creator is here because we want to save filters that user selected on landing page screen so we save our filters into our reducer
export const saveFilters = filters => dispatch => {
  dispatch({ type: FILTER_SAVE, payload: filters });
};
export const filterGrants = filters => dispatch => {
  let numCheck = 0;
  //See how many filters user selected
  Object.values(filters).map(filter => {
    filter.length !== 0 && numCheck++;
  });
  //Check if user has chosen any flters if there is one selected dispatches the filter grants action or it none is select it shows all grants from the filter grants reset action
  numCheck === 0
    ? dispatch({ type: FILTER_GRANTS_RESET })
    : dispatch({ type: FILTER_GRANTS, payload: filters });

  //initial thoughts is to have filters be an array  because users will be able to select multiple grant filter
  //Now filters will be an object that contains different arrays
};

// logic for main selecting grant card
export const selectGrant = grant => dispatch => {
  dispatch({ type: SELECT_GRANT, payload: grant });
  dispatch({ type: CHANGE_TAB, payload: 1 });
};
// This action creator is for mobile, we use this in different components like the aubmit form to change the current tab a user is on after submitting
export const changeTab = tab => dispatch => {
  dispatch({ type: CHANGE_TAB, payload: tab });
};

// Submit a New Grant
export const postGrants = (addGrant, token) => dispatch => {
  dispatch({ type: ADD_GRANT_START });
  axios
    .post(`${process.env.REACT_APP_CLIENT_STAGINGURL}/grants`, addGrant, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    // axiosWithAuth(user.token).post('/grants', addGrant)
    .then(res => {
      dispatch({ type: ADD_GRANT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      // console.log(err.response);
      dispatch({ type: ADD_GRANT_FAILURE });
    });
};

// Update a Grant

export const putGrants = (updateGrant, token) => dispatch => {
  dispatch({
    type: UPDATE_GRANT_START
  });
  axios
    .put(
      `${process.env.REACT_APP_CLIENT_STAGINGURL}/admin/${updateGrant.id}`,
      updateGrant,
      {
        headers: {
          authorization: `Bearer ${token}`
        }
      }
    )
    .then(success => {
      axios
        .get(`${process.env.REACT_APP_CLIENT_STAGINGURL}/admin`, {
          headers: {
            authorization: `Bearer ${token}`
          }
        })
        .then(response => {
          console.log("response", response);
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
      console.log("made this error");
      dispatch({ type: UPDATE_GRANT_FAILURE, payload: err });
    });
};

// Delete A grant
export const deleteGrants = (id, token) => dispatch => {
  dispatch({
    type: DELETE_GRANT_START
  });
  axios
    .delete(`${process.env.REACT_APP_CLIENT_STAGINGURL}/admin/${id}`, {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
    .then(res => {
      axios
        .get(`${process.env.REACT_APP_CLIENT_STAGINGURL}/admin`, {
          headers: {
            authorization: `Bearer ${token}`
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

// logic for suggestion modal
export const submitSuggestion = (suggestion, token) => dispatch => {
  dispatch({ type: SUBMIT_SUGGESTION_START });
  axios
    .post(
      `${process.env.REACT_APP_CLIENT_STAGINGURL}/grants/suggestion`,
      suggestion,
      {
        headers: {
          authorization: `Bearer ${token}`
        }
      }
    )
    .then(response => {
      dispatch({ type: SUBMIT_SUGGESTION_SUCCESS, payload: response.data });
    })
    .catch(error => {
      console.log("submitSuggestion error", error);
      dispatch({ type: SUBMIT_SUGGESTION_FAILURE });
    });
};

// Get Suggestions by Grant ID
export const getSuggetions = (token, grant_id) => dispatch => {
  dispatch({ type: GET_SUGGESTIONS_SUCCESS });
  axios.get(
    `${process.env.REACT_APP_CLIENT_LOCALURL}/admin/suggestions/${grant_id}`,
    {
      headers: {
        authorization: `Bearer ${token}`
      }
    }
  );
};

// Delete a grant suggestion, must be an admin
export const deleteSuggestion = (requestId, token) => dispatch => {
  dispatch({ type: DELETE_SUGGESTION_START });
  axios
    .delete(
      `${process.env.REACT_APP_CLIENT_STAGINGURL}/admin/suggestion/${requestId}`,
      {
        headers: {
          authorization: `Bearer ${token}`
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

//Add a favorite grant

export const submitFavorite = favorite => dispatch => {
  dispatch({ type: SUBMIT_FAVORITE_START });
  axios
    .post(`${process.env.REACT_APP_CLIENT_STAGINGURL}/favorites/`, favorite)

    .then(response => {
      dispatch({ type: SUBMIT_FAVORITE_SUCCESS, payload: response.data });
    })
    .catch(error => {
      console.log("submitFavorite error", error);
      dispatch({ type: SUBMIT_FAVORITE_FAILURE });
    });
};

// fetch Favorite grants for user
export const favoriteFetchApi = user => dispatch => {
  // console.log("USER HERE===>", user);
  // console.log("TOKEN HERE ===>>", user.token);
  //${user.sub}
  dispatch({ type: GET_FAVORITE_START });
  axiosWithAuth(user.token).get(`/favorites/myFavorites/${user.sub}`)

    .then(response => {
      console.log("RESPONSE????", response)
      dispatch({ type: GET_FAVORITE_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: GET_FAVORITE_FAILURE, payload: error });
    });
};

// Delete a Favorite grant , must be a user
export const deleteFavorite = (requestId, user) => dispatch => {
  dispatch({ type: DELETE_FAVORITE_START });
  axios
    .delete(
      `${process.env.REACT_APP_CLIENT_STAGINGURL} / favorites / myFavorites / ${requestId}`,
      {
        headers: {
          authorization: `Bearer ${user.token}`
        }
      }
    )

    .then(response => {
      dispatch({ type: DELETE_FAVORITE_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: DELETE_FAVORITE_FAILURE });
    });
};
