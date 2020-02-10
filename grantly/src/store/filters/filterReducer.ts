import {FilterActions, FilterFormState, FilterState, FilterTypes} from "./filterTypes";
import {filterFormState} from '../../components/filter/formState';
import {Grant} from "../grants/grantTypes";
import {Filters} from "./Filters";

const initialState: FilterState = {
    pristine: true,
    criteria: filterFormState,
    grants: []
};

function pristine(filters: FilterFormState): boolean {
    const checkPristine = new Filters(filters);
    return checkPristine.pristine();
}

const filterGrants = (grants: Grant[], state: FilterState): Grant[] => {
    const filterMethods = new Filters(state.criteria);
    const newFilters = filterMethods.getFilters();
    const keys = filterMethods.getKeys();
    const filteredArray: Grant[] = [];
    const amountArray: Grant[] = [];
    for (let i = 0; i < keys.length; i++) {
        if (keys[i] === 'amount') {
            if (newFilters[keys[i]].length > 0) {
                for (let values of newFilters[keys[i]]) {
                    const {min, max} = values.values;
                    filterMethods.filter(grants, min, max).forEach(eachGrant => amountArray.push(eachGrant));
                }
            }
        } else {
            const selectArray = amountArray.length > 0;
            for (let values of newFilters[keys[i]]) {
                filterMethods.filter(selectArray ? amountArray : grants, keys[i], values.key).forEach(eachGrant => filteredArray.push(eachGrant));
            }
        }

    }
    if (filteredArray.length === 0 && amountArray.length !== 0) {
        amountArray.forEach(eachGrant => filteredArray.push(eachGrant));
    }
    // @ts-ignore
    filteredArray.sort((a, b) => a.id > b.id ? 1 : -1);
    return filterMethods.pristine() ? grants : filteredArray
};

export const filterReducer = (state = initialState, action: FilterActions): FilterState => {
    switch (action.type) {
        case FilterTypes.FILTER_CHANGE:
            return {...state, criteria: action.payload};
        case FilterTypes.FILTER_RESET:
            return initialState;
        case FilterTypes.FILTER_GRANT:
            return {...state, grants: filterGrants(action.payload, state)};
        case FilterTypes.PRISTINE_CHECK:
            return {...state, pristine: pristine(state.criteria)};
        default:
            return state;
    }
};
