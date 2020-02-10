import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { User, UserTypes } from "./userTypes";
import { AxiosError, AxiosResponse } from "axios";
import { axiosWithAuth, axiosWithOutAuth as axios } from "../utils/axiosConfig";
import { type } from "os";

export const useUserActions = () => {
  const dispatch = useDispatch();

  const getUserFromPG = useCallback(
    email => {
      dispatch({ type: UserTypes.FETCH_USER_START });
      // @ts-ignore
      axios()
        .post(`/users`, email)
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
  const getUserByEmail = useCallback(
    (email: string, token: string) => {
      dispatch({ type: UserTypes.FETCH_USER_START });
      // @ts-ignore
      axiosWithAuth(token)
        .get(`/users/${email}`)
        .then((res: AxiosResponse) => {
          dispatch({ type: UserTypes.FETCH_USER_SUCCESS });
        })
        .catch((err: AxiosError) => {
          const data =
            err && err.response && err.response.data ? err.response.data : err;
          dispatch({ type: UserTypes.FETCH_USER_FAILURE, payload: data });
        });
    },
    [dispatch]
  );

  const getFavorites = useCallback(
    (token: string, authId: string) => {
      dispatch({ type: UserTypes.FETCH_FAVORITES_START });
      axiosWithAuth(token)
        .get(`/favorites/myFavorites/${authId}`)
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
        .post("/favorites", { grant_id, auth_id })
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
    (user: User) => {
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
        .delete(`/favorites/myFavorites/${favoriteId}`)
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
    (token: string, email: string, data: User) => {
      dispatch({ type: UserTypes.UPDATE_USER_START });
      axiosWithAuth(token)
        .put(`/users/${email}`, data)
        .then(() => {
          dispatch({ type: UserTypes.UPDATE_USER_SUCCESS });
        })
        .catch(() => {
          dispatch({ type: UserTypes.UPDATE_USER_FAILURE });
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
    getUserByEmail
  };
};

export interface UseUserActions {
  getUserFromPG: (email: string) => void;
  setUserFromAuth0: (user: User) => void;
  resetUser: () => void;
  isModerator: () => void;
  setToken: (token: string) => void;
  getFavorites: (token: string, authId: string) => void;
  addFavorite: (token: string, grant_id: number, authId: string) => void;
  removeFavorite: (token: string, favoriteId: number) => void;
  removeUser: (token: string, id: number) => void;
  updateUser: (token: string, email: string, data: User) => void;
}
