import {useCallback} from "react";
import {useDispatch} from "react-redux";
import {axiosWithAuth, axiosWithOutAuth} from "../utils/axiosConfig";
import {AdminTypes} from "./adminTypes";

export const useAdminActions = () => {
    const dispatch = useDispatch();

    const fetchAdminGrants = useCallback(
        (token: string) => {
            dispatch({type: AdminTypes.FETCH_ADMIN_GRANTS_START});
            axiosWithAuth(token)
                .get("/moderator/grants")
                .then(res =>
                    dispatch({
                        type: AdminTypes.FETCH_ADMIN_GRANTS_SUCCESS,
                        payload: res.data
                    })
                )
                .catch(error =>
                    dispatch({
                        type: AdminTypes.FETCH_ADMIN_GRANTS_FAILURE,
                        payload: error.response
                    })
                );
        },
        [dispatch]
    );

    const fetchAllUsers = useCallback(
        (token: string) => {
            dispatch({type: AdminTypes.FETCH_ADMIN_USERS_START});
            axiosWithAuth(token)
                .get("/moderator/users")
                .then(res =>
                    dispatch({
                        type: AdminTypes.FETCH_ADMIN_USERS_SUCCESS,
                        payload: res.data
                    })
                )
                .catch(error =>
                    dispatch({
                        type: AdminTypes.FETCH_ADMIN_USERS_FAILURE,
                        payload: error.response
                    })
                );
        },
        [dispatch]
    );

    const isModerator = useCallback(() => {
        dispatch({type: AdminTypes.IS_MODERATOR});
    }, [dispatch]);

    const updateModerator = useCallback(
        (token: string, userId: string, roleId: string) => {
            dispatch({type: AdminTypes.UPDATE_MODERATOR_START});
            axiosWithAuth(token)
                .post(`/admin/users/moderator/${userId}`, {roleId})
                .then(res => {
                    dispatch({
                        type: AdminTypes.UPDATE_MODERATOR_SUCCESS, payload: userId
                    });
                })
                .catch(error => {
                    dispatch({
                        type: AdminTypes.UPDATE_MODERATOR_FAILURE,
                        payload: error.response
                    });
                });
        },
        [dispatch]
    );

    const removeModerator = useCallback((token: string, userId: string, roleId: string) => {
        dispatch({type: AdminTypes.REMOVE_MODERATOR_START});
        axiosWithAuth(token).post(`/admin/users/moderator/remove/${userId}`, {roleId}).then(() => dispatch({
            type: AdminTypes.REMOVE_MODERATOR_SUCCESS,
            payload: userId
        })).catch(error => dispatch({type: AdminTypes.REMOVE_MODERATOR_FAILURE, payload: error.response}))
    }, [dispatch]);

    const fetchAllRoles = useCallback(
        (token: string) => {
            dispatch({type: AdminTypes.FETCH_ADMIN_ROLES_START});
            axiosWithAuth(token)
                .get("/moderator/roles")
                .then(res =>
                    dispatch({
                        type: AdminTypes.FETCH_ADMIN_ROLES_SUCCESS,
                        payload: res.data
                    })
                )
                .catch(error =>
                    dispatch({
                        type: AdminTypes.FETCH_ADMIN_ROLES_FAILURE,
                        payload: error.response
                    })
                );
        },
        [dispatch]
    );

    const isAdmin = useCallback(() => {
        dispatch({type: AdminTypes.IS_ADMIN});
    }, [dispatch]);

    const removeSuggestion = useCallback(
        (token: string, id: number) => {
            dispatch({type: AdminTypes.REMOVE_SUGGESTION_START});
            axiosWithAuth(token)
                .delete(`/moderator/suggestion/${id}`)
                .then(() =>
                    dispatch({
                        type: AdminTypes.REMOVE_SUGGESTION_SUCCESS,
                        payload: id
                    })
                )
                .catch(err =>
                    dispatch({
                        type: AdminTypes.REMOVE_SUGGESTION_FAILURE,
                        payload: err.response
                    })
                );
        },
        [dispatch]
    );

    const postEmailSingleText = useCallback(
        (token: string, values: any) => {
            dispatch({type: AdminTypes.POST_EMAIL_SINGLE_TEXT_START});
            axiosWithAuth(token)
                .post(`/mail/individual`, values)
                .then(res =>
                    dispatch({
                        type: AdminTypes.POST_EMAIL_SINGLE_TEXT_SUCCESS,
                        payload: res.data
                    })
                )
                .catch(err =>
                    dispatch({
                        type: AdminTypes.POST_EMAIL_SINGLE_TEXT_FAILURE,
                        payload: err.response
                    })
                );
        },
        [dispatch]
    );

    const postContactUsEmail = useCallback(
        (values: any) => {
            dispatch({type: AdminTypes.POST_EMAIL_ADMIN_FAILURE});
            axiosWithOutAuth()
                .post(`/mail/contact`, values)
                .then(res =>
                    dispatch({
                        type: AdminTypes.POST_EMAIL_ADMIN_SUCCESS,
                        payload: res.data
                    })
                )
                .catch(err =>
                    dispatch({
                        type: AdminTypes.POST_EMAIL_ADMIN_FAILURE,
                        payload: err.response
                    })
                );
        },
        [dispatch]
    );

    const resetSuccess = useCallback(() => {
        dispatch({type: AdminTypes.RESET_SUCCESS});
    }, [dispatch]);

    return {
        fetchAdminGrants,
        isModerator,
        fetchAllUsers,
        fetchAllRoles,
        isAdmin,
        updateModerator,
        removeSuggestion,
        postEmailSingleText,
        resetSuccess,
        postContactUsEmail, removeModerator
    };
};

export interface UseAdminActions {
    fetchAdminGrants: (token: string) => void;
    isModerator: () => void;
    isAdmin: () => void;
    fetchAllUsers: (token: string) => void;
    fetchAllRoles: (token: string) => void;
    updateModerator: (token: string, userId: string, roleId: string) => void;
    removeModerator: (token: string, userId: string, roleId: string) => void;
    removeSuggestion: (token: string, id: number) => void;
    postEmailSingleText: (token: string, values: any) => void;
    postContactUsEmail: (values: any) => void;

}
