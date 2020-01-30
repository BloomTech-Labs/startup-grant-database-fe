import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import axios, {AxiosError, AxiosResponse} from 'axios';
import {GrantTypes} from "./grantTypes";
import {FilterTypes} from "../filters/filterTypes";

export const useGrantActions = () => {
    const dispatch = useDispatch();

    const fetchGrants = useCallback(() => {
        dispatch({type: GrantTypes.FETCH_GRANTS_START});
        axios.get(`${process.env.REACT_APP_CLIENT_BASEURL}/grants`).then((res:AxiosResponse) => {
            dispatch({type: GrantTypes.FETCH_GRANTS_SUCCESS, payload: res.data});
            dispatch({type: FilterTypes.FILTER_GRANT, payload: res.data});
        }).catch((err: AxiosError)=>{
            const data = err && err.response && err.response.data ? err.response.data : err;
            dispatch({type: GrantTypes.FETCH_GRANTS_FAILURE, payload: data});
        });
    }, [dispatch]);

    return {fetchGrants};
}

export interface UseGrantActions {
    fetchGrants: () => void;
}
