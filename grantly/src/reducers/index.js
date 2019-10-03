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
  ADD_GRANT_FAILURE
} from "../actions/types";

// Initial state

const initialState = {
  data: [],
  filteredGrants: [],
  grantShowcase: {},
  filters: { amount: [], geographic_region: [], domain_areas: [] },
  currentTab: 0
};

// Reducer

export const rooterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
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
      console.log(payload);
      return {
        ...state,
        filters: payload
      };
    case FILTER_GRANTS:
      let newList = [];
      state.data.map(grant => {
        Object.entries(payload).map(filter => {
          filter[1].map(userFilters => {
            if (filter[0] === "amount") {
              if (userFilters.includes("-")) {
                const min = userFilters.split("-")[0].replace(/\D/g, "");
                const max = userFilters.split("-")[1].replace(/\D/g, "");
                if (grant[filter[0]] >= min && grant[filter[0]] <= max) {
                  newList.push(grant);
                }
              } else if (grant[filter[0]] <= userFilters.replace(/\D/g, "")) {
                newList.push(grant);
              } else if (userFilters.replace(/[^0-9\+]/g, "").includes("+")) {
                if (grant[filter[0]] >= userFilters.replace(/\D/g, "")) {
                  newList.push(grant);
                }
              }
            } else if (
              grant[filter[0]].toLowerCase().includes(userFilters.toLowerCase())
            ) {
              newList.push(grant);
            }
          });
        });
      });

      const testing = Array.from(new Set(newList.map(grant => grant.id))).map(
        id => {
          return newList.find(grant => grant.id === id);
        }
      );

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
    default:
      return state;
  }
};
