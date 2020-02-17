import { AdminActions, AdminState, AdminTypes } from "./adminTypes";
import { createReducer } from "../utils/createReducer";

const initialState: AdminState = {
  grants: [],
  users: [],
  roles: [],
  isLoading: false,
  isModerator: false,
  isAdmin: false,
  errors: null
};
type FunctionReducer<
  S extends AdminState = AdminState,
  P extends AdminActions = AdminActions
> = (state: AdminState, payload?: any) => AdminState;

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
const adminFailReducer: FunctionReducer = (state, payload) => ({
  ...state,
  isLoading: false,
  errors: payload
});
const adminFetchGrantsSuccessReducer: FunctionReducer = (state, payload) => ({
  ...state,
  isLoading: false,
  grants: payload
});
const adminFetchUsersSuccessReducer: FunctionReducer = (state, payload) => ({
  ...state,
  isLoading: false,
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

export const adminReducer = createReducer(initialState, {
  [AdminTypes.FETCH_ADMIN_GRANTS_START]: adminStartReducer,
  [AdminTypes.FETCH_ADMIN_GRANTS_SUCCESS]: adminFetchGrantsSuccessReducer,
  [AdminTypes.FETCH_ADMIN_GRANTS_FAILURE]: adminFailReducer,
  [AdminTypes.FETCH_ADMIN_USERS_START]: adminStartReducer,
  [AdminTypes.FETCH_ADMIN_USERS_SUCCESS]: adminFetchUsersSuccessReducer,
  [AdminTypes.FETCH_ADMIN_USERS_FAILURE]: adminFailReducer,
  [AdminTypes.FETCH_ADMIN_ROLES_START]: adminStartReducer,
  [AdminTypes.FETCH_ADMIN_ROLES_SUCCESS]: adminFetchRolesSuccessReducer,
  [AdminTypes.FETCH_ADMIN_ROLES_FAILURE]: adminFailReducer,
  [AdminTypes.UPDATE_MODERATOR_SUCCESS]: updateAdminSuccessReducer,
  [AdminTypes.FETCH_ADMIN_GRANTS_FAILURE]: adminFailReducer,
  [AdminTypes.FETCH_ADMIN_GRANTS_START]: adminStartReducer,
  [AdminTypes.IS_MODERATOR]: adminIsModeratorReducer,
  [AdminTypes.IS_ADMIN]: adminIsAdminReducer
});
