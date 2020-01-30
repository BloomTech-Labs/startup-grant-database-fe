import {FilterActions, Filters, FilterState, FilterTypes, KeyValuePair} from "./filterTypes";
import {filterFormState} from "../../components/filter/formState";
import {Grant} from "../grants/grantTypes";

const initialState: FilterState = {
    criteria: filterFormState,
    grants: []
};

function typedKeys<T>(o: T): (keyof T)[] {
    return Object.keys(o) as (keyof T)[];
}

function filterGrants(grants: Grant[], state: FilterState): Grant[] {
    const objectKeys = typedKeys<Filters>(state.criteria);
    const checkFilters = objectKeys.map((eachKey: string): Filters => {
        return <Filters>{[eachKey]: state.criteria[eachKey].filter((item: KeyValuePair) => item.checked)}
    });
    /* checkFilters is an array where the keys are indexed
        0 = amount
        1 = geographic
        2 = domain areas
        3 = admin filters
     */
    const filteredArray: Grant[] = [];
    for (let i = 0; i < 3; i++) {
        const currentFilterArray = Object.values(checkFilters[i])[0];
        if (i === 0) {
            if (currentFilterArray.length > 0)
            console.log(Object.values(checkFilters[i])[0]);
            console.log(Object.values(checkFilters[i])[0].length)
        } else {
            console.log(checkFilters[i])
        }
    }

    // Going to pass through all 4 filters and return it at the end
    // Amount

    // Geographic

    // Domain Areas

    // Admin Filters

    return []
}

export const filterReducer = (state = initialState, action: FilterActions): FilterState => {
    switch (action.type) {
        case FilterTypes.FILTER_CHANGE:
            return {...state, criteria: action.payload};
        case FilterTypes.FILTER_RESET:
            return initialState;
        case FilterTypes.FILTER_GRANT:
            return {...state, grants: filterGrants(action.payload, state)};
        default:
            return state;
    }
};
