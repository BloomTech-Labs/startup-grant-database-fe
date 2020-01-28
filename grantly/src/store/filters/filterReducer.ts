import {FilterActions, FilterState, FilterTypes} from "./filterTypes";

const initialState: FilterState = {
    criteria: {
        amount: [],
        geographic_region: [],
        domain_areas: [],
        admin_filters: [],
    },
    grants: []
};

export const filterReducer = (state = initialState, action: FilterActions): FilterState => {
    switch (action.type) {
        case FilterTypes.FILTER_CHANGE:
            return {...state, criteria: action.payload};
        case FilterTypes.FILTER_RESET:
            return initialState;
        case FilterTypes.FILTER_GRANT:
            return state;
        default:
            return state;
    }
};
