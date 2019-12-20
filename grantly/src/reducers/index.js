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
  GET_FAVORITE_FAILURE
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
  filters: {
    amount: [],
    geographic_region: [],
    domain_areas: [],
    admin_filters: []
  },
  currentTab: 0,
  currentUser: {},
  error: "",
  columns: [
    {
      title: "Grant Status",
      // cellStyle: {
      //   backgroundColor: (is_reviewed === false) ? '#3DB8B3' : 'none'
      // },
      field: "is_reviewed",
      lookup: {
        true: "Approved",
        false: "Pending"
      }
    },
    {
      title: "Last Updated",
      field: "details_last_updated",
      type: "date",
      editable: "never"
    }, //sent to server in action. not editable by user
    { title: "Name", field: "competition_name" },
    { title: "Amount", field: "amount", type: "integer" },
    { title: "Amount Notes", field: "amount_notes" },
    {
      title: "Deadline",
      field: "most_recent_application_due_date",
      type: "date"
    },
    {
      title: "Focus Area",
      field: "area_focus",
      lookup: {
        Arts: "Arts",
        "Child Care": "Child Care",
        "Economic Opportunity": "Economic Opportunity",
        "Energy & Resources": "Energy & Resources",
        Environment: "Environment",
        Financial: "Financial",
        Food: "Food",
        Health: "Health",
        Housing: "Housing",
        "Information Technology": "Information Technology",
        "Life Improvement": "Life Improvement",
        "Social Entrepreneurship": "Social Entrepreneurship",
        "Workforce Development": "Workforce Development"
      }
    },
    { title: "Sponsor", field: "sponsoring_entity" },
    { title: "Notes", field: "notes" },
    { title: "Website", field: "website" },
    {
      title: "Geographic Region",
      field: "geographic_region",
      lookup: {
        Global: "Global",
        "North America": "North America",
        Europe: "Europe",
        "South America": "South America",
        Africa: "Africa",
        Asia: "Asia",
        Australia: "Australia"
      }
    },
    {
      title: "Target Demographic",
      field: "target_entrepreneur_demographic",
      lookup: {
        "Minority Business Enterprise": "Minority Business Enterprise",
        "Women Business Enterprise": "Women Business Enterprise",
        "Disadvantaged Business Enterprise":
          "Disadvantaged Business Enterprise",
        "Veteran Business Enterprise": "Veteran Business Enterprise",
        Other: "Other",
        All: "All"
      }
    },
    {
      title: "Early Stage Funding",
      field: "early_stage_funding",
      lookup: {
        true: "Yes",
        false: "No"
      }
    }
  ]
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
      }

    case GET_FAVORITE_SUCCESS:
      return {
        ...state,
        favorites: payload
      }

    default:
      return state;
  }
};
