import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {User, UserTypes} from "./userTypes";
import {AxiosError, AxiosResponse} from 'axios';
import {axiosWithOutAuth as axios} from "../utils/axiosConfig";

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

    return {getUserFromPG, setUserFromAuth0, resetUser, isModerator, setToken}
};

export interface UseUserActions {
    getUserFromPG: (email: string) => void;
    setUserFromAuth0: (user: User) => void;
    resetUser: () => void;
    isModerator: () => void;
    setToken: (token: string) => void;
}
