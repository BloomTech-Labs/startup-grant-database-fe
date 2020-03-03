import {UserActions, UserState, UserTypes} from "./userTypes";
import {createReducer} from "../utils/createReducer";

const initialState: UserState = {
    currentUser: {
        created_at: '',
        email: '',
        user_id: '',
        picture: '',
        app_metadata: {
            authorization: {
                roles: [],
                permissions: []
            }
        },
        user_metadata: {
            first_name: '',
            last_name: '',
            role: '',
            phone: '',
            company: '',
            company_url: '',
            about: ''
        }
    },
    favoriteGrants: [],
    isLoading: false,
    errors: null,
    token: null
};

type FunctionReducer<S extends UserState = UserState, P extends UserActions = UserActions> = (
    state: UserState,
    payload?: any
) => UserState;

const userFromPGSuccessAction: FunctionReducer = (
    state: UserState,
    payload
) => ({...state, isLoading: false, currentUser: payload});

const userStartReducer: FunctionReducer = state => ({
    ...state,
    isLoading: true
});
const userSetAuth0Reducer: FunctionReducer = (state, payload) => ({
    ...state,
    isLoading: false,
    errors: null,
    currentUser: {...payload}
});
const userFailureReducer: FunctionReducer = (state, payload) => ({
    ...state,
    isLoading: false,
    errors: payload
});
const userFetchFavoritesSuccess: FunctionReducer = (state, payload) => ({
    ...state,
    favoriteGrants: payload
});

const userSetTokenReducer: FunctionReducer = (state, payload) => ({
    ...state,
    token: payload
});
const userResetUserReducer: FunctionReducer = () => initialState;
const userRemoveFavoriteSuccessReducer: FunctionReducer = (state, payload) => {
    const newFavorites = state.favoriteGrants.filter(
        grant => grant.favoriteID !== payload
    );
    return {...state, favoriteGrants: newFavorites};
};

const userRemoveReducerSuccess: FunctionReducer = state => ({...state});

const userUpdateReducerSuccess: FunctionReducer = (state, payload) => ({
    ...state,
    currentUser: {...state.currentUser, user_metadata: {...payload}}
});

export const userReducer = createReducer(initialState, {
    [UserTypes.FETCH_FAVORITES_START]: userStartReducer,
    [UserTypes.FETCH_FAVORITES_SUCCESS]: userFetchFavoritesSuccess,
    [UserTypes.FETCH_FAVORITES_FAILURE]: userFailureReducer,
    [UserTypes.SET_USER_FROM_AUTH0]: userSetAuth0Reducer,
    [UserTypes.SET_TOKEN]: userSetTokenReducer,
    [UserTypes.RESET_USER]: userResetUserReducer,
    [UserTypes.POST_FAVORITES_START]: userStartReducer,
    [UserTypes.POST_FAVORITES_SUCCESS]: userFetchFavoritesSuccess,
    [UserTypes.POST_FAVORITES_FAILURE]: userFailureReducer,
    [UserTypes.REMOVE_FAVORITES_FAILURE]: userFailureReducer,
    [UserTypes.REMOVE_FAVORITES_SUCCESS]: userRemoveFavoriteSuccessReducer,
    [UserTypes.REMOVE_USER_START]: userStartReducer,
    [UserTypes.REMOVE_USER_SUCCESS]: userRemoveReducerSuccess,
    [UserTypes.REMOVE_USER_FAILURE]: userFailureReducer,
    [UserTypes.UPDATE_USER_START]: userStartReducer,
    [UserTypes.UPDATE_USER_SUCCESS]: userUpdateReducerSuccess,
    [UserTypes.UPDATE_USER_FAILURE]: userFailureReducer,
    [UserTypes.FETCH_USER_START]: userStartReducer,
    [UserTypes.FETCH_USER_SUCCESS]: userFromPGSuccessAction,
    [UserTypes.FETCH_USER_FAILURE]: userFailureReducer,
});
