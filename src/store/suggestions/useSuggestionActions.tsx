import {useCallback} from "react";
import {useDispatch} from "react-redux";
import {AxiosError, AxiosResponse} from "axios";
import {SuggestionTypes} from "./suggestionTypes";
import {axiosWithAuth} from "../utils/axiosConfig";

export const useSuggestionActions = () => {
    const dispatch = useDispatch();

    const fetchSuggestions = useCallback(
        (token: string, grant_id: number) => {
            dispatch({type: SuggestionTypes.FETCH_SUGGESTION_START});
            axiosWithAuth(token)
                .get(`/grants/${grant_id}`)
                .then((res: AxiosResponse) => {
                    dispatch({
                        type: SuggestionTypes.FETCH_SUGGESTION_SUCCESS,
                        payload: res.data
                    });
                })
                .catch((err: AxiosError) => {
                    const data =
                        err && err.response && err.response.data ? err.response.data : err;
                    dispatch({
                        type: SuggestionTypes.FETCH_SUGGESTION_FAILURE,
                        payload: data
                    });
                });
        },
        [dispatch]
    );

    const selectSuggestion = useCallback(
        (token: string, grant_id: number, id: number) => {
            dispatch({type: SuggestionTypes.SELECT_SUGGESTION_START});
            axiosWithAuth(token)
                .get(`/grants/${grant_id}/suggestion/${id}`)
                .then((res: AxiosResponse) => {
                    dispatch({
                        type: SuggestionTypes.SELECT_SUGGESTION_SUCCESS,
                        payload: res.data
                    });
                })
                .catch((err: AxiosError) => {
                    const data =
                        err && err.response && err.response.data ? err.response.data : err;
                    dispatch({
                        type: SuggestionTypes.SELECT_SUGGESTION_FAILURE,
                        payload: data
                    });
                });
        },
        [dispatch]
    );

    const deleteSuggestion = useCallback(
        (token: string, grant_id: number, id: number) => {
            dispatch({type: SuggestionTypes.DELETE_SUGGESTION_START});
            axiosWithAuth(token)
                .delete(`/grants/${grant_id}/suggestion/${id}`)
                .then((res: AxiosResponse) => {
                    dispatch({type: SuggestionTypes.DELETE_SUGGESTION_SUCCESS});
                })
                .catch((err: AxiosError) => {
                    const data =
                        err && err.response && err.response.data ? err.response.data : err;
                    dispatch({
                        type: SuggestionTypes.DELETE_SUGGESTION_FAILURE,
                        payload: data
                    });
                });
        },
        [dispatch]
    );

    const addSuggestion = useCallback(
        (token: string, values: any) => {
            dispatch({type: SuggestionTypes.ADD_SUGGESTION_START});
            axiosWithAuth(token)
                .post(`/grants/suggestion/`, values)
                .then((res: AxiosResponse) => {
                    dispatch({
                        type: SuggestionTypes.ADD_SUGGESTION_SUCCESS,
                        payload: res.data
                    });
                })
                .catch((err: AxiosError) => {
                    const data =
                        err && err.response && err.response.data ? err.response.data : err;
                    dispatch({
                        type: SuggestionTypes.ADD_SUGGESTION_FAILURE,
                        payload: data
                    });
                });
        },
        [dispatch]
    );

    const resetSuccess = useCallback(() => {
        dispatch({type: SuggestionTypes.RESET_SUCCESS});
    }, [dispatch]);

    return {
        fetchSuggestions,
        selectSuggestion,
        deleteSuggestion,
        addSuggestion,
        resetSuccess
    };
};

export interface UseSuggestionActions {
    fetchSuggestions: (token: string, grant_id: number) => void;
    selectSuggestion: (token: string, grant_id: number, id: number) => void;
    deleteSuggestion: (token: string, grant_id: number, id: number) => void;
    addSuggestion: (token: string, grant_id: number) => void;
    resetSuccess: () => void;
}
