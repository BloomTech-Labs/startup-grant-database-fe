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
    REMOVE_MODERATOR_SUCCESS = "REMOVE_MODERATOR_SUCCESS",
    REMOVE_MODERATOR_START = "REMOVE_MODERATOR_START",
    REMOVE_MODERATOR_FAILURE = "REMOVE_MODERATOR_FAILURE",
    IS_MODERATOR = "IS_MODERATOR",
    IS_ADMIN = "IS_ADMIN",
    REMOVE_SUGGESTION_START = "REMOVE_SUGGESTION_START",
    REMOVE_SUGGESTION_SUCCESS = "REMOVE_SUGGESTION_SUCCESS",
    REMOVE_SUGGESTION_FAILURE = "REMOVE_SUGGESTION_FAILURE",
    POST_EMAIL_ALL_START = "POST_EMAIL_ALL_START",
    POST_EMAIL_ALL_SUCCESS = "POST_EMAIL_ALL_SUCCESS",
    POST_EMAIL_ALL_FAILURE = "POST_EMAIL_ALL_FAILURE",
    POST_EMAIL_SINGLE_TEXT_START = "POST_EMAIL_SINGLE_TEXT_START",
    POST_EMAIL_SINGLE_TEXT_SUCCESS = "POST_EMAIL_SINGLE_TEXT_SUCCESS",
    POST_EMAIL_SINGLE_TEXT_FAILURE = "POST_EMAIL_SINGLE_TEXT_FAILURE",
    POST_EMAIL_SINGLE_HTML_START = "POST_EMAIL_SINGLE_HTML_START",
    POST_EMAIL_SINGLE_HTML_SUCCESS = "POST_EMAIL_SINGLE_HTML_SUCCESS",
    POST_EMAIL_SINGLE_HTML_FAILURE = "POST_EMAIL_SINGLE_HTML_FAILURE",
    POST_EMAIL_ADMIN_START = "POST_EMAIL_ADMIN_START",
    POST_EMAIL_ADMIN_SUCCESS = "POST_EMAIL_ADMIN_SUCCESS",
    POST_EMAIL_ADMIN_FAILURE = "POST_EMAIL_ADMIN_FAILURE",
    RESET_SUCCESS = "RESET_SUCCESS"
}

interface Role {
    id: string;
    name: string;
    description: string;
}

interface emailAll {
    bcc: string;
    subject: string;
    message: string;
}

interface emailSingle {
    email: string;
    subject: string;
    message: string;
}

interface emailContactUs {
    from: string;
    subject: string;
    text: string;
}

export interface AdminState {
    grants: Grant[];
    users: User[];
    roles: Role[];
    emailSingle: emailSingle[];
    emailAll: emailAll[];
    isLoading: boolean;
    isUserLoading: boolean
    isModerator: boolean;
    isAdmin: boolean;
    isSuccess: boolean;
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

interface PostEmailAllStart {
    type: typeof AdminTypes.POST_EMAIL_ALL_START;
}

interface PostEmailAllSuccess {
    type: typeof AdminTypes.POST_EMAIL_ALL_SUCCESS;
    isLoading: boolean;
    payload: emailAll[];
}

interface PostEmailAllFailure {
    type: typeof AdminTypes.POST_EMAIL_ALL_FAILURE;
    payload: Error;
}

interface PostEmailSingleHTMLStart {
    type: typeof AdminTypes.POST_EMAIL_SINGLE_HTML_START;
}

interface PostEmailSingleHTMLSuccess {
    type: typeof AdminTypes.POST_EMAIL_SINGLE_HTML_SUCCESS;
    isLoading: boolean;
    payload: emailSingle[];
}

interface PostEmailSingleHTMLFailure {
    type: typeof AdminTypes.POST_EMAIL_SINGLE_HTML_FAILURE;
    payload: Error;
}

interface PostEmailSingleTextStart {
    type: typeof AdminTypes.POST_EMAIL_SINGLE_TEXT_START;
}

interface PostEmailSingleTextSuccess {
    type: typeof AdminTypes.POST_EMAIL_SINGLE_TEXT_SUCCESS;
    isLoading: boolean;
    payload: emailSingle[];
}

interface PostEmailSingleTextFailure {
    type: typeof AdminTypes.POST_EMAIL_SINGLE_TEXT_FAILURE;
    payload: Error;
}

interface PostEmailAdminStart {
    type: typeof AdminTypes.POST_EMAIL_ADMIN_START;
}

interface PostEmailAdminSuccess {
    type: typeof AdminTypes.POST_EMAIL_ADMIN_SUCCESS;
    isLoading: boolean;
    payload: emailContactUs[];
}

interface PostEmailAdminFailure {
    type: typeof AdminTypes.POST_EMAIL_ADMIN_FAILURE;
    payload: Error;
}

interface ResetSuccess {
    type: typeof AdminTypes.RESET_SUCCESS;
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
    | RemoveSuggestionFailure
    | PostEmailAllStart
    | PostEmailAllSuccess
    | PostEmailAllFailure
    | PostEmailSingleHTMLStart
    | PostEmailSingleHTMLSuccess
    | PostEmailSingleHTMLFailure
    | PostEmailSingleTextStart
    | PostEmailSingleTextSuccess
    | PostEmailSingleTextFailure
    | PostEmailAdminStart
    | PostEmailAdminSuccess
    | PostEmailAdminFailure
    | ResetSuccess;
