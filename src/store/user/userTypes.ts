import {Error} from "../reduxTypes";
import {Grant} from "../grants/grantTypes";

export enum UserTypes {
    FETCH_USER_START = "FETCH_USER_START",
    FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS",
    FETCH_USER_FAILURE = "FETCH_USER_FAILURE",
    FETCH_USERS_START = "FETCH_USERS_START",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE",
    FETCH_FAVORITES_START = "FETCH_FAVORITES_START",
    FETCH_FAVORITES_SUCCESS = "FETCH_FAVORITES_SUCCESS",
    FETCH_FAVORITES_FAILURE = "FETCH_FAVORITES_FAILURE",
    POST_FAVORITES_START = "POST_FAVORITES_START",
    POST_FAVORITES_SUCCESS = "POST_FAVORITES_SUCCESS",
    POST_FAVORITES_FAILURE = "POST_FAVORITES_FAILURE",
    REMOVE_FAVORITES_START = "REMOVE_FAVORITES_START",
    REMOVE_FAVORITES_SUCCESS = "REMOVE_FAVORITES_SUCCESS",
    REMOVE_FAVORITES_FAILURE = "REMOVE_FAVORITES_FAILURE",
    UPDATE_USER_START = "UPDATE_USER_START",
    UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS",
    UPDATE_USER_FAILURE = "UPDATE_USER_FAILURE",
    REMOVE_USER_START = "REMOVE_USER_START",
    REMOVE_USER_SUCCESS = "REMOVE_USER_SUCCESS",
    REMOVE_USER_FAILURE = "REMOVE_USER_FAILURE",
    SET_USER_FROM_AUTH0 = "SET_USER_FROM_AUTH0",
    RESET_USER = "RESET_USER",
    SET_TOKEN = "SET_TOKEN"
}

export interface UserMetaData {
    first_name?: string
    last_name?: string
    role?: string
    phone?: string
    company?: string
    company_url?: string
    about?: string
}

export interface User {
    created_at: string
    email: string
    user_id: string
    picture: string
    app_metadata: {
        get?: string
        authorization: {
            roles: string[],
            permissions: string[]
        }
    },
    user_metadata?: UserMetaData
}

export interface UserState {
    currentUser: User;
    favoriteGrants: Grant[];
    isLoading: boolean;
    errors: Error | null;
    token: string | null;
}

interface FetchUserStartAction {
    type: typeof UserTypes.FETCH_USER_START;
}

interface FetchUserSuccessAction {
    type: typeof UserTypes.FETCH_USER_SUCCESS;
    payload: User;
}

interface FetchUserFailureAction {
    type: typeof UserTypes.FETCH_USER_FAILURE;
    payload: Error;
}

interface ResetUserAction {
    type: typeof UserTypes.RESET_USER;
}

interface SetTokenAction {
    type: typeof UserTypes.SET_TOKEN;
    payload: string;
}

interface FetchFavoritesStartAction {
    type: typeof UserTypes.FETCH_FAVORITES_START;
}

interface FetchFavoritesSuccessAction {
    type: typeof UserTypes.FETCH_FAVORITES_SUCCESS;
    payload: Grant[];
}

interface FetchFavoritesFailureAction {
    type: typeof UserTypes.FETCH_FAVORITES_FAILURE;
    payload: Error;
}

interface AddFavoriteStartAction {
    type: typeof UserTypes.POST_FAVORITES_START;
}

interface AddFavoriteSuccessAction {
    type: typeof UserTypes.POST_FAVORITES_SUCCESS;
    payload: Grant[];
}

interface AddFavoriteFailureAction {
    type: typeof UserTypes.POST_FAVORITES_FAILURE;
    payload: Error;
}

interface UpdateUserStartAction {
    type: typeof UserTypes.UPDATE_USER_START;
}

interface UpdateUserSuccessAction {
    type: typeof UserTypes.UPDATE_USER_SUCCESS;
    payload: User;
}

interface UpdateUserFailureAction {
    type: typeof UserTypes.UPDATE_USER_FAILURE;
    payload: Error;
}

interface FetchUsersStartAction {
    type: typeof UserTypes.FETCH_USERS_START;
}

interface FetchUsersSuccessAction {
    type: typeof UserTypes.FETCH_USERS_SUCCESS;
    payload: User[];
}

interface FetchUsersFailureAction {
    type: typeof UserTypes.FETCH_USERS_FAILURE;
    payload: Error;
}

export type UserActions =
    | FetchUserStartAction
    | FetchUserSuccessAction
    | FetchUserFailureAction
    | FetchUsersStartAction
    | FetchUsersSuccessAction
    | FetchUsersFailureAction
    | ResetUserAction
    | SetTokenAction
    | FetchFavoritesStartAction
    | UpdateUserStartAction
    | UpdateUserSuccessAction
    | UpdateUserFailureAction
    | FetchFavoritesSuccessAction
    | FetchFavoritesFailureAction
    | AddFavoriteFailureAction
    | AddFavoriteStartAction
    | AddFavoriteSuccessAction;
