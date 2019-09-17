// Action types
import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_ERROR,
  SELECT_GRANT,
  FILTER_GRANTS
} from "../actions/types";

// Initial state

const initialState = {
  data: [],
  filteredGrants: [],
  grantShowcase: {},
  filters: {}
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
      console.log("FETCH_SUCCESS payload", payload);
      return {
        ...state,
        error: "",
        isFetching: false,
        data: payload.grants,
        filteredGrants: payload.grants,
        grantShowcase: payload.grants[0]
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
    case FILTER_GRANTS:
      return {
        ...state,
        filters: payload,
        filteredGrants: [...state.data.filter(grant => {
           Object.entries(payload).map(filter => {
              filter[1].map(userFilters => {
              // if(grant[filter[0]] === "amount"){
              //   return grant[filter][0] <= userFilters
              // }
              if(grant[filter[0]].includes(userFilters.toLowerCase())){
                console.log("true");
                console.log("grant", userFilters)
                return grant;
              }
            })
            // console.log("filter", filter)
   
          })
        })]

        // [...state.data.filter(grant => {
        //   return grant.amount <= 1000; 
        // })]

      }
    default:
      return state;
  }
};
