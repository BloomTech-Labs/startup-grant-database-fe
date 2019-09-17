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
  grantShowcase: {},
  filters: []
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
        data: state.data.filter(filter => {
          return 
        })
      }
    default:
      return state;
  }
};
