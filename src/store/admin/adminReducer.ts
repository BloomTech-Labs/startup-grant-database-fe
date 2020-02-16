import {AdminActions, AdminState, AdminTypes} from "./adminTypes";
import {createReducer} from "../utils/createReducer";

const initialState: AdminState = {
    grants: [],
    users: [],
    isLoading: false,
    isModerator: false,
    errors: null
}
type FunctionReducer<S extends AdminState = AdminState, P extends AdminActions = AdminActions> = (state: AdminState, payload?: any) => AdminState;

const adminIsModeratorReducer: FunctionReducer = state => ({
    ...state,
    isModerator: true
});

const adminStartReducer: FunctionReducer = state => ({...state, isLoading: true});
const adminFailReducer: FunctionReducer = (state, payload) => ({...state, isLoading: false, errors: payload});
const adminFetchGrantsSuccessReducer: FunctionReducer = (state, payload) => ({...state, isLoading: false, grants: payload});
const adminFetchUsersSuccessReducer: FunctionReducer = (state, payload) => ({...state, isLoading: false, users: payload});

export const adminReducer = createReducer(initialState, {
    [AdminTypes.FETCH_ADMIN_GRANTS_START]: adminStartReducer,
    [AdminTypes.FETCH_ADMIN_GRANTS_SUCCESS]: adminFetchGrantsSuccessReducer,
    [AdminTypes.FETCH_ADMIN_GRANTS_FAILURE]: adminFailReducer,
    [AdminTypes.FETCH_ADMIN_USERS_START]: adminStartReducer,
    [AdminTypes.FETCH_ADMIN_USERS_SUCCESS]: adminFetchUsersSuccessReducer,
    [AdminTypes.FETCH_ADMIN_USERS_FAILURE]: adminFailReducer,
    [AdminTypes.IS_MODERATOR]: adminIsModeratorReducer
});