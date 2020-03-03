import {AdminActions, AdminState, AdminTypes} from "./adminTypes";
import {createReducer} from "../utils/createReducer";

const initialState: AdminState = {
    grants: [],
    users: [],
    roles: [],
    emailSingle: [],
    emailAll: [],
    isLoading: false,
    isUserLoading: false,
    isModerator: false,
    isAdmin: false,
    isSuccess: false,
    errors: null
};
type FunctionReducer<S extends AdminState = AdminState,
    P extends AdminActions = AdminActions> = (state: AdminState, payload?: any) => AdminState;

const adminIsModeratorReducer: FunctionReducer = state => ({
    ...state,
    isModerator: true
});

const adminIsAdminReducer: FunctionReducer = state => ({
    ...state,
    isModerator: true,
    isAdmin: true
});

const adminStartReducer: FunctionReducer = state => ({
    ...state,
    isLoading: true
});

const adminStartUserFetchReducer: FunctionReducer = state => ({
    ...state,
    isUserLoading: true
});

const adminFailReducer: FunctionReducer = (state, payload) => ({
    ...state,
    isLoading: false,
    errors: payload
});

const adminFailFetchUsersReducer: FunctionReducer = (state, payload) => ({
    ...state,
    isUserLoading: false,
    errors: payload
});
const adminFetchGrantsSuccessReducer: FunctionReducer = (state, payload) => ({
    ...state,
    isLoading: false,
    grants: payload
});
const adminFetchUsersSuccessReducer: FunctionReducer = (state, payload) => ({
    ...state,
    isUserLoading: false,
    users: payload
});
const adminFetchRolesSuccessReducer: FunctionReducer = (state, payload) => ({
    ...state,
    isLoading: false,
    roles: payload
});
const updateAdminSuccessReducer: FunctionReducer = (state, payload) => ({
    ...state,
    isLoading: false,
    roles: payload
});

const removeSuggestionSuccess: FunctionReducer = (state, payload) => ({
    ...state,
    grants: state.grants.map(grant => ({
        ...grant,
        requests: grant.requests.filter((request: any) => request.id !== payload)
    }))
});

const PostEmailAllSuccess: FunctionReducer = (state, payload) => ({
    ...state,
    isSuccess: true,
    isLoading: false
});

const PostEmailAllFailure: FunctionReducer = (state, payload) => ({
    ...state,
    isLoading: false,
    errors: payload
});

const PostEmailAllStart: FunctionReducer = (state, payload) => ({
    ...state,
    isLoading: true
});

const PostEmailSingleTextSuccess: FunctionReducer = (state, payload) => ({
    ...state,
    isSuccess: true,
    isLoading: false,
    emailSingle: payload
});

const PostEmailSingleTextFailure: FunctionReducer = (state, payload) => ({
    ...state,
    isLoading: false,
    errors: payload
});

const PostEmailSingleTextStart: FunctionReducer = (state, payload) => ({
    ...state,
    isLoading: true
});

const PostEmailSingleHTMLSuccess: FunctionReducer = (state, payload) => ({
    ...state,
    isSuccess: true,
    isLoading: false
});

const PostEmailSingleHTMLFailure: FunctionReducer = (state, payload) => ({
    ...state,
    isLoading: false,
    errors: payload
});

const PostEmailSingleHTMLStart: FunctionReducer = (state, payload) => ({
    ...state,
    isLoading: true
});

const PostEmailToAdminSuccess: FunctionReducer = (state, payload) => ({
    ...state,
    isSuccess: true,
    isLoading: false
});

const PostEmailToAdminFailure: FunctionReducer = (state, payload) => ({
    ...state,
    isLoading: false,
    errors: payload
});

const PostEmailToAdminStart: FunctionReducer = (state, payload) => ({
    ...state,
    isLoading: true
});

const ResetSuccess: FunctionReducer = (state, payload) => ({
    ...state,
    isSuccess: false
});

const updateModeratorReducer = (state: AdminState, payload: string) => {
    const updatedUsers = state.users.map(user => {
        if (user.user_id === payload) {
            return {
                ...user,
                roles: [{
                    id: 'rol_5UqpdIHN4QO0ShpA',
                    name: 'Moderator',
                    description: 'Assigns users to the Moderators Role',
                    sources: [
                        {
                            source_id: '',
                            source_type: 'DIRECT',
                            source_name: ''
                        }
                    ]
                }]
            }
        } else {
            return user
        }
    });
    return {...state, users: updatedUsers, isLoading: false}
};

const removeModeratorReducer = (state: AdminState, payload: string) => {
    const updatedUsers = state.users.map(user => {
        if (user.user_id === payload) {
            return {
                ...user,
                roles: []
            }
        } else {
            return user
        }
    });
    return {...state, users: updatedUsers, isLoading: false}
};

export const adminReducer = createReducer(initialState, {
    [AdminTypes.FETCH_ADMIN_GRANTS_START]: adminStartReducer,
    [AdminTypes.FETCH_ADMIN_GRANTS_SUCCESS]: adminFetchGrantsSuccessReducer,
    [AdminTypes.FETCH_ADMIN_GRANTS_FAILURE]: adminFailReducer,
    [AdminTypes.FETCH_ADMIN_USERS_START]: adminStartUserFetchReducer,
    [AdminTypes.FETCH_ADMIN_USERS_SUCCESS]: adminFetchUsersSuccessReducer,
    [AdminTypes.FETCH_ADMIN_USERS_FAILURE]: adminFailFetchUsersReducer,
    [AdminTypes.FETCH_ADMIN_ROLES_START]: adminStartReducer,
    [AdminTypes.FETCH_ADMIN_ROLES_SUCCESS]: adminFetchRolesSuccessReducer,
    [AdminTypes.FETCH_ADMIN_ROLES_FAILURE]: adminFailReducer,
    [AdminTypes.UPDATE_MODERATOR_SUCCESS]: updateModeratorReducer,
    [AdminTypes.FETCH_ADMIN_GRANTS_FAILURE]: adminFailReducer,
    [AdminTypes.FETCH_ADMIN_GRANTS_START]: adminStartReducer,
    [AdminTypes.IS_MODERATOR]: adminIsModeratorReducer,
    [AdminTypes.IS_ADMIN]: adminIsAdminReducer,
    [AdminTypes.REMOVE_SUGGESTION_START]: adminStartReducer,
    [AdminTypes.REMOVE_SUGGESTION_SUCCESS]: removeSuggestionSuccess,
    [AdminTypes.REMOVE_SUGGESTION_FAILURE]: adminFailReducer,
    [AdminTypes.POST_EMAIL_ALL_START]: PostEmailAllStart,
    [AdminTypes.POST_EMAIL_ALL_SUCCESS]: PostEmailAllSuccess,
    [AdminTypes.POST_EMAIL_ALL_FAILURE]: PostEmailAllFailure,
    [AdminTypes.POST_EMAIL_SINGLE_TEXT_START]: PostEmailSingleTextStart,
    [AdminTypes.POST_EMAIL_SINGLE_TEXT_SUCCESS]: PostEmailSingleTextSuccess,
    [AdminTypes.POST_EMAIL_SINGLE_TEXT_FAILURE]: PostEmailSingleTextFailure,
    [AdminTypes.POST_EMAIL_SINGLE_HTML_START]: PostEmailSingleHTMLStart,
    [AdminTypes.POST_EMAIL_SINGLE_HTML_SUCCESS]: PostEmailSingleHTMLSuccess,
    [AdminTypes.POST_EMAIL_SINGLE_HTML_FAILURE]: PostEmailSingleHTMLFailure,
    [AdminTypes.POST_EMAIL_ADMIN_START]: PostEmailToAdminStart,
    [AdminTypes.POST_EMAIL_ADMIN_SUCCESS]: PostEmailToAdminSuccess,
    [AdminTypes.POST_EMAIL_ADMIN_FAILURE]: PostEmailToAdminFailure,
    [AdminTypes.RESET_SUCCESS]: ResetSuccess,
    [AdminTypes.UPDATE_MODERATOR_START]: adminStartReducer,
    [AdminTypes.UPDATE_MODERATOR_FAILURE]: adminFailReducer,
    [AdminTypes.REMOVE_MODERATOR_START]: adminStartReducer,
    [AdminTypes.REMOVE_MODERATOR_SUCCESS]: removeModeratorReducer,
    [AdminTypes.REMOVE_MODERATOR_FAILURE]: adminFailReducer
});
