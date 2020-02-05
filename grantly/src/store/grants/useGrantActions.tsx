import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {AxiosError, AxiosResponse} from 'axios';
import {Grant, GrantTypes} from "./grantTypes";
import {FilterTypes} from "../filters/filterTypes";
import {axiosWithOutAuth as axios} from "../utils/axiosConfig";

export const useGrantActions = () => {
    const dispatch = useDispatch();

    const fetchGrants = useCallback(() => {
        dispatch({type: GrantTypes.FETCH_GRANTS_START});
        // @ts-ignore
        axios().get(`/grants`).then((res:AxiosResponse) => {
            dispatch({type: GrantTypes.FETCH_GRANTS_SUCCESS, payload: res.data});
            dispatch({type: FilterTypes.FILTER_GRANT, payload: res.data});
        }).catch((err: AxiosError)=>{
            const data = err && err.response && err.response.data ? err.response.data : err;
            dispatch({type: GrantTypes.FETCH_GRANTS_FAILURE, payload: data});
        });
    }, [dispatch]);

    const selectGrant = useCallback((grant: Grant) => {
        dispatch({type: GrantTypes.SELECT_GRANT, payload: grant})
    }, [dispatch]);

    const fetchAdminGrants = useCallback(() => {
        dispatch({type: GrantTypes.FETCH_GRANTS_START});
        // @ts-ignore
        axios().get(`/admin`).then((res:AxiosResponse) => {
            dispatch({type: GrantTypes.FETCH_GRANTS_SUCCESS, payload: res.data});
            dispatch({type: FilterTypes.FILTER_GRANT, payload: res.data});
        }).catch((err: AxiosError)=>{
            const data = err && err.response && err.response.data ? err.response.data : err;
            dispatch({type: GrantTypes.FETCH_GRANTS_FAILURE, payload: data});
        });
    }, [dispatch]);

    return {fetchGrants, fetchAdminGrants, selectGrant};
}

export interface UseGrantActions {
    fetchGrants: () => void;
    selectGrant: (grant: Grant) => void;
}
