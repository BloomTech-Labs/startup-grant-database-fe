import {Error} from "../reduxTypes";

export enum GrantTypes {
    FETCH_GRANTS_START = 'FETCH_GRANTS_START',
    FETCH_GRANTS_SUCCESS = 'FETCH_GRANTS_SUCCESS',
    FETCH_GRANTS_FAILURE = 'FETCH_GRANTS_FAILURE ',
    FETCH_ADMIN_GRANTS_START = 'FETCH_ADMIN_GRANTS_START',
    FETCH_ADMIN_GRANTS_SUCCESS = 'FETCH_ADMIN_GRANTS_SUCCESS',
    FETCH_ADMIN_GRANTS_FAILURE = 'FETCH_ADMIN_GRANTS_FAILURE ',
}

export interface Grant {
    id?: number;
    competition_name: string;
    area_focus: string;
    sponsoring_entity: string;
    website: string;
    most_recent_application_due_date: string;
    amount: number;
    amount_notes: string | null;
    geographic_region: string | null;
    target_entrepreneur_demographic: string | null;
    notes: string;
    early_stage_funding: number | boolean;
    is_reviewed: number | boolean;
    has_requests: number | boolean;
    details_last_updated: string;
}

export interface GrantState {
    grants: Grant[],
    isLoading: boolean,
    errors: Error | null
}

interface FetchGrantStart {
    type: typeof GrantTypes.FETCH_GRANTS_START
}

interface FetchGrantSuccess {
    type: typeof GrantTypes.FETCH_GRANTS_SUCCESS;
    payload: Grant[];
}

interface FetchGrantFailure {
    type: typeof GrantTypes.FETCH_GRANTS_FAILURE;
    payload: Error
}

interface FetchAdminGrantStart {
    type: typeof GrantTypes.FETCH_ADMIN_GRANTS_START
}

interface FetchAdminGrantSuccess {
    type: typeof GrantTypes.FETCH_ADMIN_GRANTS_SUCCESS;
    payload: Grant[];
}

interface FetchAdminGrantFailure {
    type: typeof GrantTypes.FETCH_ADMIN_GRANTS_FAILURE;
    payload: Error
}

export type GrantActions =
    FetchGrantStart
    | FetchGrantSuccess
    | FetchGrantFailure
    | FetchAdminGrantStart
    | FetchAdminGrantSuccess
    | FetchAdminGrantFailure
