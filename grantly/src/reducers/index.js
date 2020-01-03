// Action types
import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_ERROR,
  SELECT_GRANT,
  CHANGE_TAB,
  FILTER_SAVE,
  FILTER_GRANTS,
  FILTER_GRANTS_RESET,
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
  DELETE_SUGGESTION_SUCCESS,
  GET_FAVORITE_START,
  GET_FAVORITE_SUCCESS,
  GET_FAVORITE_FAILURE,
  DELETE_FAVORITE_START,
  DELETE_FAVORITE_SUCCESS,
  DELETE_FAVORITE_FAILURE,
  SUBMIT_FAVORITE_START,
  SUBMIT_FAVORITE_SUCCESS,
  SUBMIT_FAVORITE_FAILURE,
  SELECT_FAVORITE
} from "../actions/types";
import moment from "moment";

// Initial state

const initialState = {
  data: [],
  favorites: [],
  isDeleted: 0,
  isFetching: false,
  filteredGrants: [],
  grantShowcase: {},
  favoriteShowcase: {},
  filters: {
    amount: [],
    geographic_region: [],
    domain_areas: [],
    admin_filters: []
  },
  currentTab: 0,
  currentUser: {},
  error: ""
};

// Reducer

export const rooterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHECK_ADMIN: {
      return {
        ...state
      };
    }
    case SET_USER: {
      return {
        ...state,
        currentUser: payload
      };
    }
    case SET_TOKEN_IN_STORE: {
      return {
        ...state,
        currentUser: { ...state.currentUser, token: payload }
      };
    }
    case FETCH_START:
      return {
        ...state,
        error: "",
        isFetching: true
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        error: "",
        isFetching: false,
        data: payload,
        filteredGrants: payload,
        grantShowcase: payload[0]
      };

    case FETCH_ERROR:
      return {
        ...state,
        error: payload,
        isFetching: false
      };
    case SELECT_GRANT:
      return {
        ...state,
        grantShowcase: payload
      };
    case CHANGE_TAB:
      return {
        ...state,
        currentTab: payload
      };
    case FILTER_SAVE:
      return {
        ...state,
        filters: payload
      };
    case FILTER_GRANTS:
      // The payload is an object where the properties are the filter type
      // and the values being an array with each item being the multiple filters
      // Ex. { amount: [under $1,000, $5,000 - $10,000]}
      const filtersWithoutAdmin = Object.entries(payload); // Change that object into an array
      filtersWithoutAdmin.pop(); // Remove the admin properties
      let newList = [];
      state.data.map(grant => {
        //Start to loop over every grant and check the filters to see if grant matches

        filtersWithoutAdmin.map(filter => {
          //Loop through each individual filter, it is an array ex, ["ammount", ["under $1,000", $5,000 - $10,000]]
          filter[1].map(userFilters => {
            //Loop through second array and decide if grant matches the filter, for example "uerFilters" will refer to under $1,000 first
            if (filter[0] === "amount") {
              // This code block checks if the filter is the amoutn filter and will convert the strings in the array into an easily compared number
              if (userFilters.includes("-")) {
                const min = userFilters.split("-")[0].replace(/\D/g, "");
                const max = userFilters.split("-")[1].replace(/\D/g, "");
                if (grant[filter[0]] >= min && grant[filter[0]] <= max) {
                  newList.push(grant);
                }
              } else if (userFilters.replace(/[^0-9\+]/g, "").includes("+")) {
                if (grant[filter[0]] >= userFilters.replace(/\D/g, "")) {
                  newList.push(grant);
                }
              } else if (grant[filter[0]] <= userFilters.replace(/\D/g, "")) {
                newList.push(grant);
              }
            } else if (
              grant[filter[0]].toLowerCase().includes(userFilters.toLowerCase()) //This block checks if the grant property exists and if it includes the user filter
            ) {
              newList.push(grant);
            }
          });
        });
      });

      if (payload.admin_filters.length !== 0) {
        // This block is for admin filters
        newList = state.data.filter(grant => {
          if (payload.admin_filters.includes("new")) {
            return grant.is_reviewed === false;
          } else if (payload.admin_filters.includes("expired")) {
            return (
              moment(grant.most_recent_application_due_date).format() <=
              moment().format()
            );
          } else if (payload.admin_filters.includes("suggestions")) {
            return grant.requests.length > 0;
          }
        });
      }

      //This creates an array from a new Set created from the newList array. Set makes sure that we have no duplicate grants in our array
      const setGrants = Array.from(new Set(newList.map(grant => grant.id))).map(
        id => {
          return newList.find(grant => grant.id === id);
        }
      );

      return {
        ...state,
        filters: payload,
        filteredGrants: setGrants
      };
    case FILTER_GRANTS_RESET:
      return {
        ...state,

        filteredGrants: state.data
      };
    case ADD_GRANT_START:
      return {
        ...state,
        isFetching: true,
        error: payload
      };
    case ADD_GRANT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: payload
      };
    case ADD_GRANT_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: payload
      };
    case UPDATE_GRANT_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case UPDATE_GRANT_SUCCESS:
      let [showCase] = payload[0].filter(grant => {
        return grant.id === payload[1];
      });
      console.log("update", payload);
      console.log("showcase", showCase);
      return {
        ...state,
        isFetching: false,

        data: payload[0],
        filters: { ...state.filters, admin_filters: [] },

        filteredGrants: payload[0],
        grantShowcase: showCase
      };
    case UPDATE_GRANT_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: payload
      };
    case DELETE_GRANT_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case DELETE_GRANT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: payload,
        filteredGrants: payload,
        grantShowcase: payload[0]
      };
    case DELETE_GRANT_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: payload
      };

    case DELETE_SUGGESTION_SUCCESS:
      return {
        ...state,
        isDeleted: Math.random()
      };

    case GET_FAVORITE_START:
      return {
        ...state
        // fetchingData: true
      };

    case GET_FAVORITE_SUCCESS:
      return {
        ...state,
        favorites: payload,
        favoriteShowcase: payload[0]
      };

    case SELECT_FAVORITE:
      return {
        ...state,
        favoriteShowcase: payload
      };

    case DELETE_FAVORITE_START:
      return {
        ...state,
        favorites: payload
      };

    case DELETE_FAVORITE_SUCCESS:
      return {
        ...state,
        favorites: payload
      };
    case SUBMIT_FAVORITE_START:
      return {
        ...state,
        favorites: payload
      };
    case SUBMIT_FAVORITE_SUCCESS:
      return {
        ...state,
        grantShowcase: payload
      };
    case SUBMIT_FAVORITE_FAILURE:
      return { ...state, error: payload };
    default:
      return state;
  }
};
