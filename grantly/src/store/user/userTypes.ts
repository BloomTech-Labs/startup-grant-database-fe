import {Error} from "../reduxTypes";

export enum UserTypes {
   FETCH_USER_START = 'FETCH_USER_START',
   FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
   FETCH_USER_FAILURE = 'FETCH_USER_FAILURE',
}

interface User {
    email: string;
    role: string;
}

export interface UserState {
    currentUser: User;
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

export type UserActions = FetchUserStartAction | FetchUserSuccessAction | FetchUserFailureAction
