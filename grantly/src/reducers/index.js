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
      let newList = [];

     

      return {
        ...state,
        filters: payload,
        filteredGrants:  [...state.data.filter(grant => {
          Object.entries(payload).map(filter => {
            filter[1].map(userFilters => {
              if(filter[0] === "amount"){
                console.log("newList", newList)
                console.log("wazzup", userFilters.replace(/[^0-9\-]/g, ''));
                console.log("zup", userFilters.replace(/[^0-9\+]/g, ''));
  
                if(userFilters.includes("-")){
                  const min = userFilters.split("-")[0].replace(/\D/g,'')
                  const max = userFilters.split("-")[1].replace(/\D/g,'')
                  if(grant[filter[0]] >= min && grant[filter[0]] <= max){
                    newList.push(grant)
                  }
                  
                } else if(grant[filter[0]] <= userFilters.replace(/\D/g,'')){
                  newList.push(grant);
                } else if (userFilters.replace(/[^0-9\+]/g, '').includes("+")){
                  if(grant[filter[0]] >= userFilters.replace(/\D/g,'')){
                    console.log("no", userFilters.replace(/\D/g,''))
                    newList.push(grant)
                  }
                }
              } else {
                if (
                  grant[filter[0]].toLowerCase().includes(userFilters.toLowerCase())
                ) {
                  newList.push(grant);
                  console.log("newList", newList);
                }
  
              }
            });
            // console.log("filter", filter)
          });
        })]

        // [...state.data.filter(grant => {
        //   return grant.amount <= 1000;
        // })]
      };
    default:
      return state;
  }
};
