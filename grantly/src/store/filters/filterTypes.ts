import {Grant} from "../grants/grantTypes";

export enum FilterTypes {
    FILTER_CHANGE = 'FILTER_CHANGE',
    FILTER_RESET = 'FILTER_RESET',
    FILTER_GRANT = 'FILTER_GRANT'
}

export interface Filters {
    amount: string[];
    geographic_region: string[];
    domain_areas: string[],
    admin_filters: string[]
}

export interface FilterState {
    criteria: Filters,
    grants: Grant[]
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

export type FilterActions = FilterChangeAction | FilterResetAction | FilterGrantAction
