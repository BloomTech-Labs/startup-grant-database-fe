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
  CHECK_ADMIN,
  SET_USER
} from "../actions/types";

// Initial state

const initialState = {
  data: [],
  isFetching: false,
  filteredGrants: [],
  grantShowcase: {},
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
      console.log("reducer", payload);
      return {
        ...state,
        currentUser: payload
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
      const filtersWithoutAdmin = Object.entries(state.filters);
      filtersWithoutAdmin.pop();
      let newList = [];
      state.data.map(grant => {
        filtersWithoutAdmin.map(filter => {
          filter[1].map(userFilters => {
            if (filter[0] === "amount") {
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
              grant[filter[0]].toLowerCase().includes(userFilters.toLowerCase())
            ) {
              newList.push(grant);
            }
          });
        });
      });

      if (payload.admin_filters.length !== 0) {
        newList = state.data.filter(grant => {
          if (payload.admin_filters.includes("new")) {
            return grant.is_reviewed === false;
          } else if (payload.admin_filters.includes("suggestions")) {
            return grant.has_requests === true;
          }
        });
      }

      const testing = Array.from(new Set(newList.map(grant => grant.id))).map(
        id => {
          return newList.find(grant => grant.id === id);
        }
      );
      console.log(testing);
      return {
        ...state,
        data: Array.from(new Set(state.data.map(grant => grant.id))).map(id => {
          return state.data.find(grant => grant.id === id);
        }),
        filters: payload,
        filteredGrants: testing
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
        error: payload
      };
    case UPDATE_GRANT_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: { ...state.data, payload }
      };
    case UPDATE_GRANT_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: payload
      };

    default:
      return state;
  }
};
