import {Error} from "../reduxTypes";
import {Grant} from "../grants/grantTypes";

export enum UserTypes {
    FETCH_USER_START = 'FETCH_USER_START',
    FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
    FETCH_USER_FAILURE = 'FETCH_USER_FAILURE',
    SET_USER_FROM_AUTH0 = 'SET_USER_FROM_AUTH0',
    RESET_USER = 'RESET_USER',
    IS_MODERATOR = 'IS_MODERATOR',
    SET_TOKEN = 'SET_TOKEN'
}

export interface User {
    nickname: string;
    name: string;
    picture: string;
    updated_at: string;
    email: string;
    email_verified: boolean;
    sub: string;
}

export interface UserState {
    currentUser: User;
    token: string | null
    favoriteGrants: Grant[];
    isModerator: boolean;
    isLoading: boolean;
    errors: Error | null;
}

interface FetchUserStartAction {
    type: typeof UserTypes.FETCH_USER_START
}

interface FetchUserSuccessAction {
    type: typeof UserTypes.FETCH_USER_SUCCESS
    payload: User;
}

interface FetchUserFailureAction {
    type: typeof UserTypes.FETCH_USER_FAILURE
    payload: Error;
}

interface SetUserFromAuth0Action {
    type: typeof UserTypes.SET_USER_FROM_AUTH0;
    payload: User
}

interface IsModeratorAction {
    type: typeof UserTypes.IS_MODERATOR
}

interface ResetUserAction {
    type: typeof UserTypes.RESET_USER
}

interface SetTokenAction {
    type: typeof UserTypes.SET_TOKEN
    payload: string
}

export type UserActions =
    FetchUserStartAction
    | FetchUserSuccessAction
    | FetchUserFailureAction
    | SetUserFromAuth0Action
    | ResetUserAction | IsModeratorAction | SetTokenAction
