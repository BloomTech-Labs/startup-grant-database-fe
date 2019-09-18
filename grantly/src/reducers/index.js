// Action types
import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_ERROR,
  SELECT_GRANT,
  FILTER_GRANTS,
  FILTER_GRANTS_RESET
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
      // Don't pay attention to this mess :)
      // let list = state.data.filter(grant => {
      //   console.log("test", Object.entries(payload))
      //   Object.entries(payload).filter(filter => {
      //     return filter[1].filter(userFilters => {
      //       if(filter[0] === "amount"){

      //         if(userFilters.includes("-")){
      //           const min = userFilters.split("-")[0].replace(/\D/g,'')
      //           const max = userFilters.split("-")[1].replace(/\D/g,'')
      //           if(grant[filter[0]] >= min && grant[filter[0]] <= max){
      //             return true
      //           }

      //         } else if(grant[filter[0]] <= userFilters.replace(/\D/g,'')){
      //           return true
      //         } else if (userFilters.replace(/[^0-9\+]/g, '').includes("+")){
      //           if(grant[filter[0]] >= userFilters.replace(/\D/g,'')){
      //             return true
      //           }
      //         }
      //       } else {
      //         if (
      //           grant[filter[0]].toLowerCase().includes(userFilters.toLowerCase())
      //         ) {
      //           return true
      //         }

      //       }
      //     });
      //   });
      // });

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

      console.log("non", testing);

      return {
        ...state,
        data: Array.from(new Set(state.data.map(grant => grant.id))).map(id => {
          return state.data.find(grant => grant.id === id);
        }),
        filters: payload,
        filteredGrants: testing

        // [...state.data.filter(grant => {
        //   return grant.amount <= 1000;
        // })]
      };
    case FILTER_GRANTS_RESET:
      return {
        ...state,
        filteredGrants: state.data
      };
    default:
      return state;
  }
};
