import { Error } from "../reduxTypes";
import { Grant } from "../grants/grantTypes";

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
  IS_MODERATOR = "IS_MODERATOR",
  SET_TOKEN = "SET_TOKEN"
}

export interface Auth0User {
  nickname: string;
  name: string;
  picture: string;
  updated_at: string;
  email: string;
  email_verified: boolean;
  sub: string;
}

export interface PGUser {
  id: number | null;
  email: string;
  first_name: string | null;
  last_name: string | null;
  role: string | null;
  phone: string | null;
  company: string | null;
  company_url: string | null;
  about: string | null;
}

export interface UserState {
  currentUser: Auth0User;
  pgUser: PGUser;
  favoriteGrants: Grant[];
  users: PGUser[];
  isModerator: boolean;
  isLoading: boolean;
  errors: Error | null;
}

interface FetchUserStartAction {
  type: typeof UserTypes.FETCH_USER_START;
}

interface FetchUserSuccessAction {
  type: typeof UserTypes.FETCH_USER_SUCCESS;
  payload: PGUser;
}

interface FetchUserFailureAction {
  type: typeof UserTypes.FETCH_USER_FAILURE;
  payload: Error;
}

interface SetUserFromAuth0Action {
  type: typeof UserTypes.SET_USER_FROM_AUTH0;
  payload: Auth0User;
}

interface IsModeratorAction {
  type: typeof UserTypes.IS_MODERATOR;
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
  payload: PGUser;
}

interface UpdateUserFailureAction {
  type: typeof UserTypes.UPDATE_USER_FAILURE;
  payload: Error;
}

interface RemoveUserStartAction {
  type: typeof UserTypes.REMOVE_USER_START;
}

interface RemoveUserSuccessAction {
  type: typeof UserTypes.REMOVE_USER_SUCCESS;
  payload: PGUser;
}

interface RemoveUserFailureAction {
  type: typeof UserTypes.REMOVE_USER_FAILURE;
  payload: Error;
}

interface FetchUsersStartAction {
  type: typeof UserTypes.FETCH_USERS_START;
}

interface FetchUsersSuccessAction {
  type: typeof UserTypes.FETCH_USERS_SUCCESS;
  payload: PGUser[];
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
  | SetUserFromAuth0Action
  | ResetUserAction
  | IsModeratorAction
  | SetTokenAction
  | FetchFavoritesStartAction
  | UpdateUserStartAction
  | UpdateUserSuccessAction
  | UpdateUserFailureAction
  | RemoveUserStartAction
  | RemoveUserSuccessAction
  | RemoveUserFailureAction
  | FetchFavoritesSuccessAction
  | FetchFavoritesFailureAction
  | AddFavoriteFailureAction
  | AddFavoriteStartAction
  | AddFavoriteSuccessAction;
