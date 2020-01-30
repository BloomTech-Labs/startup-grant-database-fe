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

    // Pristine Form Check
    const pristine = (): boolean => {
        for (let i = 0; i < 4; i++) {
            const checkArray = Object.values(checkFilters[i])[0];
            if (checkArray.length > 0) {
                return false;
            }
        }
        return true;
    };
    /* checkFilters is an array where the keys are indexed
        0 = amount
        1 = geographic
        2 = domain areas
        3 = admin filters
     */
    const filteredArray: Grant[] = [];
    const amountArray: Grant[] = [];
    for (let i = 0; i < 4; i++) {
        const currentFilterArray = Object.values(checkFilters[i])[0];
        const currentKey = Object.keys(checkFilters[i])[0];
        if (i === 0) {
            if (currentFilterArray.length > 0) {
                for (let index = 0; index < currentFilterArray.length; index++) {
                    const {min, max} = currentFilterArray[index].values;
                    if (!min) {
                        grants.filter(grant => grant.amount < max).forEach(eachGrant => amountArray.push(eachGrant));
                    } else if (!max) {
                        grants.filter(grant => grant.amount > min).forEach(eachGrant => amountArray.push(eachGrant));
                    } else {
                        grants.filter(grant => grant.amount >= min && grant.amount <= max).forEach(eachGrant => amountArray.push(eachGrant));
                    }
                }
            }
        } else {
            const selectFilters = amountArray.length !== 0;
            for (let index = 0; index < currentFilterArray.length; index++) {
                if (selectFilters) {
                    amountArray.filter(grant => grant[currentKey] === currentFilterArray[index].key).forEach(eachGrant => filteredArray.push(eachGrant));
                } else {
                    grants.filter(grant => grant[currentKey] === currentFilterArray[0].key).forEach(eachGrant => filteredArray.push(eachGrant));
                }
            }
        }
    }
    if (filteredArray.length === 0 && amountArray.length !== 0) {
        amountArray.forEach(eachGrant => filteredArray.push(eachGrant));
    }
    return pristine() ? grants : filteredArray;
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
