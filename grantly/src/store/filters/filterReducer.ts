import {FilterActions, FilterState, FilterTypes} from "./filterTypes";
import {filterFormState} from "../../components/filter/formState";
import {Grant} from "../grants/grantTypes";

const initialState: FilterState = {
    criteria: filterFormState,
    grants: []
};

function filterGrants(grants: Grant[]): Grant[] {

    return []
}

export const filterReducer = (state = initialState, action: FilterActions): FilterState => {
    switch (action.type) {
        case FilterTypes.FILTER_CHANGE:
            return {...state, criteria: action.payload};
        case FilterTypes.FILTER_RESET:
            return initialState;
        case FilterTypes.FILTER_GRANT:
            return {...state};
        default:
            return state;
    }
};
