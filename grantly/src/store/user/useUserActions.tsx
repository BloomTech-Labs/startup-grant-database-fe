import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {UserTypes} from "./userTypes";
import axios from 'axios';

export const useUserActions = () => {
    const dispatch = useDispatch();

    const getUserFromPG = useCallback(email => {
        dispatch({type: UserTypes.FETCH_USER_START});
        axios.post(`${process.env.REACT_APP_CLIENT_BASEURL}/users`, email).then(res => {
            dispatch({type: UserTypes.FETCH_USER_SUCCESS, payload: res.data})
        }).catch(err => {
            dispatch({type: UserTypes.FETCH_USER_FAILURE, payload: err.response.data})
        })
    }, [dispatch]);

    return {getUserFromPG}
};
