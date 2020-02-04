import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {User, UserTypes} from "./userTypes";
import {AxiosError, AxiosResponse} from 'axios';
import {axiosWithAuth, axiosWithOutAuth as axios} from "../utils/axiosConfig";

export const useUserActions = () => {
    const dispatch = useDispatch();

    const getUserFromPG = useCallback(email => {
        dispatch({type: UserTypes.FETCH_USER_START});
        // @ts-ignore
        axios().post(`/users`, email).then((res: AxiosResponse) => {
            dispatch({type: UserTypes.FETCH_USER_SUCCESS, payload: res.data})
        }).catch((err: AxiosError) => {
            const data = err && err.response && err.response.data ? err.response.data : err;
            dispatch({type: UserTypes.FETCH_USER_FAILURE, payload: data})
        })
    }, [dispatch]);

    const getFavorites = useCallback((token: string, authId: string) => {
        dispatch({type: UserTypes.FETCH_FAVORITES_START});
        axiosWithAuth(token).get(`/favorites/myfavorites/${authId}`)
            .then(res => dispatch({
                type: UserTypes.FETCH_FAVORITES_SUCCESS,
                payload: res.data
            }))
            .catch(error => dispatch({type: UserTypes.FETCH_FAVORITES_FAILURE, payload: error.response.data}))
    }, [dispatch]);

    const addFavorite = useCallback((token: string, grant_id: number, auth_id: string) => {
        dispatch({type: UserTypes.POST_FAVORITES_START});
        axiosWithAuth(token).post('/favorites', {
            grant_id,
            auth_id
        }).then(res => console.log(res.data)).catch(error => console.log(error.response));
    }, [dispatch]);

    const setUserFromAuth0 = useCallback((user: User) => {
        dispatch({type: UserTypes.SET_USER_FROM_AUTH0, payload: user})
    }, [dispatch]);

    const resetUser = useCallback(() => {
        dispatch({type: UserTypes.RESET_USER})
    }, [dispatch]);

    const isModerator = useCallback(() => {
        dispatch({type: UserTypes.IS_MODERATOR})
    }, [dispatch]);

    const setToken = useCallback((token: string) => {
        dispatch({type: UserTypes.SET_TOKEN, payload: token});
    }, [dispatch]);

    return {getUserFromPG, setUserFromAuth0, resetUser, isModerator, setToken, getFavorites, addFavorite}
};

export interface UseUserActions {
    getUserFromPG: (email: string) => void;
    setUserFromAuth0: (user: User) => void;
    resetUser: () => void;
    isModerator: () => void;
    setToken: (token: string) => void;
    getFavorites: (token: string, authId: string) => void;
    addFavorite: (token: string, grant_id: number, authId: string) => void;
}
