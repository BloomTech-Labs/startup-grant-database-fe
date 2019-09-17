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
      console.log("reducer", Object.entries(payload)[1])
      return {
        ...state,
        filters: payload,
        filteredGrants: [...state.data.map(grant => {
          return Object.entries(payload)[1].map(filter => {
            console.log(grant[filter])
            console.log(payload)
          //   if(grant.payload[0].includes(filter)){
          //     console.log("true");
          //   }
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
