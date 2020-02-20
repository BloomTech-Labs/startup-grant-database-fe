import {Grant} from "../grants/grantTypes";
import {Error} from "../reduxTypes";
import {User} from "../user/userTypes";

export enum AdminTypes {
    FETCH_ADMIN_GRANTS_START = "FETCH_ADMIN_GRANTS_START",
    FETCH_ADMIN_GRANTS_SUCCESS = "FETCH_ADMIN_GRANTS_SUCCESS",
    FETCH_ADMIN_GRANTS_FAILURE = "FETCH_ADMIN_GRANTS_FAILURE",
    FETCH_ADMIN_USERS_START = "FETCH_ADMIN_USERS_START",
    FETCH_ADMIN_USERS_SUCCESS = "FETCH_ADMIN_USERS_SUCCESS",
    FETCH_ADMIN_USERS_FAILURE = "FETCH_ADMIN_USERS_FAILURE",
    FETCH_ADMIN_ROLES_START = "FETCH_ADMIN_ROLES_START",
    FETCH_ADMIN_ROLES_SUCCESS = "FETCH_ADMIN_ROLES_SUCCESS",
    FETCH_ADMIN_ROLES_FAILURE = "FETCH_ADMIN_ROLES_FAILURE",
    UPDATE_MODERATOR_SUCCESS = "UPDATE_MODERATOR_SUCCESS",
    UPDATE_MODERATOR_START = "UPDATE_MODERATOR_START",
    UPDATE_MODERATOR_FAILURE = "UPDATE_MODERATOR_FAILURE",
    IS_MODERATOR = "IS_MODERATOR",
    IS_ADMIN = "IS_ADMIN",
    REMOVE_SUGGESTION_START = 'REMOVE_SUGGESTION_START',
    REMOVE_SUGGESTION_SUCCESS = 'REMOVE_SUGGESTION_SUCCESS',
    REMOVE_SUGGESTION_FAILURE = 'REMOVE_SUGGESTION_FAILURE'
}

interface Role {
    id: string;
    name: string;
    description: string;
}

export interface AdminState {
    grants: Grant[];
    users: User[];
    roles: Role[];
    isLoading: boolean;
    isModerator: boolean;
    isAdmin: boolean;
    errors: Error | null;
}

interface FetchAdminGrantsStartAction {
    type: typeof AdminTypes.FETCH_ADMIN_GRANTS_START;
}

interface FetchAdminGrantsSuccessAction {
    type: typeof AdminTypes.FETCH_ADMIN_GRANTS_SUCCESS;
    payload: Grant[];
}

interface FetchAdminGrantsFailureAction {
    type: typeof AdminTypes.FETCH_ADMIN_GRANTS_FAILURE;
    payload: Error;
}

interface FetchAdminUsersStartAction {
    type: typeof AdminTypes.FETCH_ADMIN_USERS_START;
}

interface FetchAdminUsersSuccessAction {
    type: typeof AdminTypes.FETCH_ADMIN_USERS_SUCCESS;
    payload: User[];
}

interface FetchAdminUsersFailureAction {
    type: typeof AdminTypes.FETCH_ADMIN_USERS_FAILURE;
    payload: Error;
}

interface FetchAdminRolesStartAction {
    type: typeof AdminTypes.FETCH_ADMIN_ROLES_START;
}

interface FetchAdminRolesSuccessAction {
    type: typeof AdminTypes.FETCH_ADMIN_ROLES_SUCCESS;
    payload: Role[];
}

interface FetchAdminRolesFailureAction {
    type: typeof AdminTypes.FETCH_ADMIN_ROLES_FAILURE;
    payload: Error;
}

interface IsModeratorAction {
    type: typeof AdminTypes.IS_MODERATOR;
}

interface IsAdminAction {
    type: typeof AdminTypes.IS_ADMIN;
}

interface UpdateAdminStart {
    type: typeof AdminTypes.UPDATE_MODERATOR_START;
}

interface UpdateAdminSuccess {
    type: typeof AdminTypes.UPDATE_MODERATOR_SUCCESS;
    payload: Role[];
}

interface UpdateAdminFailure {
    type: typeof AdminTypes.UPDATE_MODERATOR_FAILURE;
    payload: Error;
}

interface RemoveSuggestionStart {
    type: typeof AdminTypes.REMOVE_SUGGESTION_START;
}

interface RemoveSuggestionSuccess {
    type: typeof AdminTypes.REMOVE_SUGGESTION_SUCCESS;
    payload: Role[];
}

interface RemoveSuggestionFailure {
    type: typeof AdminTypes.REMOVE_SUGGESTION_FAILURE;
    payload: Error;
}


export type AdminActions =
    | FetchAdminGrantsFailureAction
    | FetchAdminGrantsStartAction
    | FetchAdminGrantsSuccessAction
    | FetchAdminUsersFailureAction
    | FetchAdminUsersStartAction
    | FetchAdminUsersSuccessAction
    | IsModeratorAction
    | FetchAdminRolesFailureAction
    | FetchAdminRolesStartAction
    | FetchAdminRolesSuccessAction
    | IsAdminAction
    | UpdateAdminSuccess
    | UpdateAdminStart
    | UpdateAdminFailure
    | RemoveSuggestionStart
    | RemoveSuggestionSuccess
    | RemoveSuggestionFailure;
