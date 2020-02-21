import {useCallback} from "react";
import {useDispatch} from "react-redux";
import {UserMetaData, UserTypes} from "./userTypes";
import {AxiosError, AxiosResponse} from "axios";
import {axiosWithAuth} from "../utils/axiosConfig";

export const useUserActions = () => {
    const dispatch = useDispatch();
    const getUserFromAuth0 = useCallback(
        (token: string) => {
            dispatch({type: UserTypes.FETCH_USER_START});
            // @ts-ignore
            axiosWithAuth(token)
                .get(`/users/user`)
                .then((res: AxiosResponse) => {
                    dispatch({type: UserTypes.FETCH_USER_SUCCESS, payload: res.data});
                })
                .catch((err: AxiosError) => {
                    const data =
                        err && err.response && err.response.data ? err.response.data : err;
                    dispatch({type: UserTypes.FETCH_USER_FAILURE, payload: data});
                });
        },
        [dispatch]
    );

    const getFavorites = useCallback(
        (token: string, authId: string) => {
            dispatch({type: UserTypes.FETCH_FAVORITES_START});
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
            dispatch({type: UserTypes.POST_FAVORITES_START});
            axiosWithAuth(token)
                .post("/users/favorites", {grant_id, auth_id})
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

    const resetUser = useCallback(() => {
        dispatch({type: UserTypes.RESET_USER});
    }, [dispatch]);


    const setToken = useCallback(
        (token: string) => {
            dispatch({type: UserTypes.SET_TOKEN, payload: token});
        },
        [dispatch]
    );

    const removeFavorite = useCallback(
        (token: string, favoriteId: number) => {
            dispatch({type: UserTypes.REMOVE_FAVORITES_START});
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
            dispatch({type: UserTypes.REMOVE_USER_START});
            axiosWithAuth(token)
                .delete(`/users/${id}`)
                .then(() => {
                    dispatch({type: UserTypes.REMOVE_USER_SUCCESS});
                })
                .catch(() => {
                    dispatch({type: UserTypes.REMOVE_USER_FAILURE});
                });
        },
        [dispatch]
    );

    const updateUser = useCallback(
        (token: string, data: UserMetaData) => {
            dispatch({type: UserTypes.UPDATE_USER_START});
            axiosWithAuth(token)
                .patch(`/users/user`, {user_metadata: {...data}})
                .then(res => {
                    dispatch({type: UserTypes.UPDATE_USER_SUCCESS, payload: data});
                })
                .catch(err => {
                    dispatch({
                        type: UserTypes.UPDATE_USER_FAILURE,
                        payload: err.response
                    });
                });
        },
        [dispatch]
    );

    const fetchAllUsers = useCallback(
        (token: string) => {
            dispatch({type: UserTypes.FETCH_USERS_START});
            axiosWithAuth(token)
                .get("/users")
                .then(res => {
                    dispatch({type: UserTypes.FETCH_USERS_SUCCESS, payload: res.data});
                })
                .catch(err => {
                    dispatch({
                        type: UserTypes.FETCH_USERS_FAILURE,
                        payload: err.response
                    });
                });
        },
        [dispatch]
    );
    return {
        getUserFromAuth0,
        resetUser,
        setToken,
        getFavorites,
        addFavorite,
        removeUser,
        updateUser,
        removeFavorite,
        fetchAllUsers
    };
};

export interface UseUserActions {
    getUserFromAuth0: (token: string) => void;
    resetUser: () => void;
    setToken: (token: string) => void;
    getFavorites: (token: string, authId: string) => void;
    addFavorite: (token: string, grant_id: number, authId: string) => void;
    removeFavorite: (token: string, favoriteId: number) => void;
    removeUser: (token: string, id: number) => void;
    updateUser: (token: string, data: UserMetaData) => void;
    fetchAllUsers: (token: string) => void;
}
