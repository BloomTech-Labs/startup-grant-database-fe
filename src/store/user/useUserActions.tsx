import { useCallback } from "react";
import { useDispatch } from "react-redux";
import {Auth0User, PGUser, UserTypes} from "./userTypes";
import { AxiosError, AxiosResponse } from "axios";
import { axiosWithAuth, axiosWithOutAuth as axios } from "../utils/axiosConfig";
import { type } from "os";
import {logger} from "../utils/logger";

export const useUserActions = () => {
  const dispatch = useDispatch();

  const getUserFromPG = useCallback(
    (token: string, email: string) => {
        logger('Email inside of Action', {email});
      dispatch({ type: UserTypes.FETCH_USER_START });
      // @ts-ignore
      axiosWithAuth(token)
        .post(`/users`, {email})
        .then((res: AxiosResponse) => {
          dispatch({ type: UserTypes.FETCH_USER_SUCCESS, payload: res.data });
        })
        .catch((err: AxiosError) => {
          const data =
            err && err.response && err.response.data ? err.response.data : err;
          dispatch({ type: UserTypes.FETCH_USER_FAILURE, payload: data });
        });
    },
    [dispatch]
  );
  // const getUserByEmail = useCallback(
  //   (email: string, token: string) => {
  //     dispatch({ type: UserTypes.FETCH_USER_START });
  //     // @ts-ignore
  //     axiosWithAuth(token)
  //       .get(`/users/${email}`)
  //       .then((res: AxiosResponse) => {
  //         dispatch({ type: UserTypes.FETCH_USER_SUCCESS });
  //       })
  //       .catch((err: AxiosError) => {
  //         const data =
  //           err && err.response && err.response.data ? err.response.data : err;
  //         dispatch({ type: UserTypes.FETCH_USER_FAILURE, payload: data });
  //       });
  //   },
  //   [dispatch]
  // );

  const getFavorites = useCallback(
    (token: string, authId: string) => {
      dispatch({ type: UserTypes.FETCH_FAVORITES_START });
      axiosWithAuth(token)
        .get(`/users/${authId}/favorites`)
        .then(res =>
          dispatch({
            type: UserTypes.FETCH_FAVORITES_SUCCESS,
            payload: res.data
          })
        )
        .catch(error =>
          dispatch({
            type: UserTypes.FETCH_FAVORITES_FAILURE,
            payload: error.response.data
          })
        );
    },
    [dispatch]
  );

  const addFavorite = useCallback(
    (token: string, grant_id: number, auth_id: string) => {
      dispatch({ type: UserTypes.POST_FAVORITES_START });
      axiosWithAuth(token)
        .post("/users/favorites", { grant_id, auth_id })
        .then(res =>
          dispatch({
            type: UserTypes.POST_FAVORITES_SUCCESS,
              payload: res.data
          })
        )
        .catch(error =>
          dispatch({
            type: UserTypes.POST_FAVORITES_FAILURE,
            payload: error.response
          })
        );
    },
    [dispatch]
  );

  const setUserFromAuth0 = useCallback(
    (user: Auth0User) => {
      dispatch({ type: UserTypes.SET_USER_FROM_AUTH0, payload: user });
    },
    [dispatch]
  );

  const resetUser = useCallback(() => {
    dispatch({ type: UserTypes.RESET_USER });
  }, [dispatch]);

  const isModerator = useCallback(() => {
    dispatch({ type: UserTypes.IS_MODERATOR });
  }, [dispatch]);

  const setToken = useCallback(
    (token: string) => {
      dispatch({ type: UserTypes.SET_TOKEN, payload: token });
    },
    [dispatch]
  );

  const removeFavorite = useCallback(
    (token: string, favoriteId: number) => {
      dispatch({ type: UserTypes.REMOVE_FAVORITES_START });
      axiosWithAuth(token)
        .delete(`/users/favorites/${favoriteId}`)
        .then(() =>
          dispatch({
            type: UserTypes.REMOVE_FAVORITES_SUCCESS,
            payload: favoriteId
          })
        )
        .catch(err =>
          dispatch({
            type: UserTypes.REMOVE_FAVORITES_FAILURE,
            payload: err.response.data
          })
        );
    },
    [dispatch]
  );

  const removeUser = useCallback(
    (token: string, id: number) => {
      dispatch({ type: UserTypes.REMOVE_USER_START });
      axiosWithAuth(token)
        .delete(`/users/${id}`)
        .then(() => {
          dispatch({ type: UserTypes.REMOVE_USER_SUCCESS });
        })
        .catch(() => {
          dispatch({ type: UserTypes.REMOVE_USER_FAILURE });
        });
    },
    [dispatch]
  );

  const updateUser = useCallback(
    (token: string, id: number, data: PGUser) => {
      dispatch({ type: UserTypes.UPDATE_USER_START });
      axiosWithAuth(token)
        .put(`/users/${id}`, data)
        .then(res => {
          dispatch({ type: UserTypes.UPDATE_USER_SUCCESS, payload: res.data });
        })
        .catch(err => {
          dispatch({ type: UserTypes.UPDATE_USER_FAILURE, payload: err.response });
        });
    },
    [dispatch]
  );

  return {
    getUserFromPG,
    setUserFromAuth0,
    resetUser,
    isModerator,
    setToken,
    getFavorites,
    addFavorite,
    removeUser,
    updateUser,
    removeFavorite,
  };
};

export interface UseUserActions {
  getUserFromPG: (token: string, email: string) => void;
  setUserFromAuth0: (user: Auth0User) => void;
  resetUser: () => void;
  isModerator: () => void;
  setToken: (token: string) => void;
  getFavorites: (token: string, authId: string) => void;
  addFavorite: (token: string, grant_id: number, authId: string) => void;
  removeFavorite: (token: string, favoriteId: number) => void;
  removeUser: (token: string, id: number) => void;
  updateUser: (token: string, id: number, data: PGUser) => void;
}
