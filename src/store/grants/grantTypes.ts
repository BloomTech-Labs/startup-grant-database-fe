import {Error} from "../reduxTypes";

export enum GrantTypes {
    FETCH_GRANTS_START = "FETCH_GRANTS_START",
    FETCH_GRANTS_SUCCESS = "FETCH_GRANTS_SUCCESS",
    FETCH_GRANTS_FAILURE = "FETCH_GRANTS_FAILURE ",
    FETCH_ADMIN_GRANTS_START = "FETCH_ADMIN_GRANTS_START",
    FETCH_ADMIN_GRANTS_SUCCESS = "FETCH_ADMIN_GRANTS_SUCCESS",
    FETCH_ADMIN_GRANTS_FAILURE = "FETCH_ADMIN_GRANTS_FAILURE ",
    UPDATE_ADMIN_GRANTS_START = "UPDATE_ADMIN_GRANTS_START",
    UPDATE_ADMIN_GRANTS_SUCCESS = "UPDATE_ADMIN_GRANTS_SUCCESS",
    UPDATE_ADMIN_GRANTS_FAILURE = "UPDATE_ADMIN_GRANTS_FAILURE ",
    DELETE_ADMIN_GRANTS_START = "DELETE_ADMIN_GRANTS_START",
    DELETE_ADMIN_GRANTS_SUCCESS = "DELETE_ADMIN_GRANTS_SUCCESS",
    DELETE_ADMIN_GRANTS_FAILURE = "DELETE_ADMIN_GRANTS_FAILURE ",
    SELECT_ADMIN_GRANTS_START = "SELECT_ADMIN_GRANTS_START",
    SELECT_ADMIN_GRANTS_SUCCESS = "SELECT_ADMIN_GRANTS_SUCCESS",
    SELECT_ADMIN_GRANTS_FAILURE = "SELECT_ADMIN_GRANTS_FAILURE ",
    POST_GRANTS_START = "POST_GRANTS_START",
    POST_GRANTS_SUCCESS = "POST_GRANTS_SUCCESS",
    POST_GRANTS_FAILURE = "POST_GRANTS_FAILURE ",
    SELECT_GRANT = "SELECT_GRANT"
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
    favoriteID?: number

    [index: string]: any
}

export interface GrantState {
    grants: Grant[]
    publicGrants: Grant[]
    showcase: Grant | null
    isLoading: boolean
    errors: Error | null
}

interface FetchGrantStart {
    type: typeof GrantTypes.FETCH_GRANTS_START;
}

interface FetchGrantSuccess {
    type: typeof GrantTypes.FETCH_GRANTS_SUCCESS;
    payload: Grant[];
}

interface FetchGrantFailure {
    type: typeof GrantTypes.FETCH_GRANTS_FAILURE;
    payload: Error;
}

interface FetchAdminGrantStart {
    type: typeof GrantTypes.FETCH_ADMIN_GRANTS_START;
}

interface FetchAdminGrantSuccess {
    type: typeof GrantTypes.FETCH_ADMIN_GRANTS_SUCCESS;
    payload: Grant[];
}

interface FetchAdminGrantFailure {
    type: typeof GrantTypes.FETCH_ADMIN_GRANTS_FAILURE;
    payload: Error;
}

interface PostGrantStart {
    type: typeof GrantTypes.POST_GRANTS_START;
}

interface PostGrantSuccess {
    type: typeof GrantTypes.POST_GRANTS_SUCCESS;
    payload: Grant[];
}

interface PostGrantFailure {
    type: typeof GrantTypes.POST_GRANTS_FAILURE;
    payload: Error;
}

interface SelectGrantAction {
    type: typeof GrantTypes.SELECT_GRANT;
    payload: Grant;
}

interface UpdateAdminGrantsStart {
    type: typeof GrantTypes.UPDATE_ADMIN_GRANTS_START
    isUpdating: boolean
}

interface UpdateAdminGrantsSuccess {
    type: typeof GrantTypes.UPDATE_ADMIN_GRANTS_SUCCESS
    // payload: Grant;
}

interface UpdateAdminGrantsFailure {
    type: typeof GrantTypes.UPDATE_ADMIN_GRANTS_FAILURE
    payload: Error;
}

interface DeleteAdminGrantsStart {
    type: typeof GrantTypes.DELETE_ADMIN_GRANTS_START

}

interface DeleteAdminGrantsSuccess {
    type: typeof GrantTypes.DELETE_ADMIN_GRANTS_SUCCESS
}

interface DeleteAdminGrantsFailure {
    type: typeof GrantTypes.DELETE_ADMIN_GRANTS_FAILURE
    payload: Error;
}

interface SelectAdminGrantsStart {
    type: typeof GrantTypes.SELECT_ADMIN_GRANTS_START

}

interface SelectAdminGrantsSuccess {
    type: typeof GrantTypes.SELECT_ADMIN_GRANTS_SUCCESS
}

interface SelectAdminGrantsFailure {
    type: typeof GrantTypes.SELECT_ADMIN_GRANTS_FAILURE
    payload: Error;
}

export type GrantActions =
    | FetchGrantStart
    | FetchGrantSuccess
    | FetchGrantFailure
    | FetchAdminGrantStart
    | FetchAdminGrantSuccess
    | FetchAdminGrantFailure
    | PostGrantStart
    | PostGrantSuccess
    | PostGrantFailure
    | UpdateAdminGrantsStart
    | UpdateAdminGrantsSuccess
    | UpdateAdminGrantsFailure
    | DeleteAdminGrantsStart
    | DeleteAdminGrantsSuccess
    | DeleteAdminGrantsFailure
    | SelectAdminGrantsStart
    | SelectAdminGrantsSuccess
    | SelectAdminGrantsFailure
    | SelectGrantAction;
