import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {User, UserTypes} from "./userTypes";
import axios, {AxiosError, AxiosResponse} from 'axios';

export const useUserActions = () => {
    const dispatch = useDispatch();

    const getUserFromPG = useCallback(email => {
        dispatch({type: UserTypes.FETCH_USER_START});
        axios.post(`${process.env.REACT_APP_CLIENT_BASEURL}/users`, email).then((res:AxiosResponse) => {
            dispatch({type: UserTypes.FETCH_USER_SUCCESS, payload: res.data})
        }).catch((err:AxiosError) => {
            const data = err && err.response && err.response.data ? err.response.data : err;
            dispatch({type: UserTypes.FETCH_USER_FAILURE, payload: data})
        })
    }, [dispatch]);

    const setUserFromAuth0 = useCallback((user: User) => {
        dispatch({type: UserTypes.SET_USER_FROM_AUTH0, payload: user})
    }, [dispatch]);

    return {getUserFromPG, setUserFromAuth0}
};

export interface UseUserActions {
    getUserFromPG: (email: string) => void;
}
