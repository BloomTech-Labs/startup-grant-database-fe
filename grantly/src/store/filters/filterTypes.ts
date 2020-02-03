import {Grant} from "../grants/grantTypes";

export enum FilterTypes {
    FILTER_CHANGE = 'FILTER_CHANGE',
    FILTER_RESET = 'FILTER_RESET',
    FILTER_GRANT = 'FILTER_GRANT',
    PRISTINE_CHECK = 'PRISTINE_CHECK'
}

interface Amount {
    min: number | null;
    max: number | null;
}

export interface KeyValuePair {
    key: string;
    checked: boolean;
    values?: Amount;
}

export type KeyValuePairArray = {
    [index: number]: KeyValuePair
}

export interface Filters {
    amount: KeyValuePairArray;
    geographic_region: KeyValuePairArray;
    domain_areas: KeyValuePairArray,
    admin_filters: KeyValuePairArray
}

export interface FilterState {
    pristine: boolean;
    criteria: Filters;
    grants: Grant[];
}

interface FilterChangeAction {
    type: typeof FilterTypes.FILTER_CHANGE
    payload: Filters
}

interface FilterResetAction {
    type: typeof FilterTypes.FILTER_RESET
}

interface FilterGrantAction {
    type: typeof FilterTypes.FILTER_GRANT,
    payload: Grant[]
}

interface FilterPristineAction {
    type: typeof FilterTypes.PRISTINE_CHECK
}

export type FilterActions = FilterChangeAction | FilterResetAction | FilterGrantAction | FilterPristineAction
