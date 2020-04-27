import {Grant} from "../grants/grantTypes";

export enum FilterTypes {
    FILTER_CHANGE = 'FILTER_CHANGE',
    FILTER_RESET = 'FILTER_RESET',
    FILTER_GRANT = 'FILTER_GRANT',
    PRISTINE_CHECK = 'PRISTINE_CHECK'
}

export interface FormState {
    key: string
    checked: boolean

    [index: string]: any
}

interface Amount {
    values: {
        min: number | null
        max: number | null
    }

    [index: string]: any
}

export type AmountState = FormState & Amount

export interface FilterFormState {
    amount: AmountState[]
    geographic_region: FormState[]
    domain_areas: FormState[]

    [key: string]: FormState[] | AmountState[]
}

export interface FilterState {
    pristine: boolean
    criteria: FilterFormState
    grants: Grant[]
}

interface FilterChangeAction {
    type: typeof FilterTypes.FILTER_CHANGE
    payload: FilterFormState
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
