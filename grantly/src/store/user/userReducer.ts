import {UserActions, UserState, UserTypes} from "./userTypes";
import {createReducer} from "../utils/createReducer";

const initialState: UserState = {
    currentUser: {
        email: '',
        email_verified: false,
        nickname: '',
        name: '',
        picture: '',
        sub: '',
        updated_at: ''
        // will need more object fields here
    },
    favoriteGrants: [],
    isModerator: false,
    isLoading: false,
    errors: null,
};

type FunctionReducer<S extends UserState = UserState, P = any> = (state:UserState, payload?: any) => UserState;

const userStartReducer: FunctionReducer = (state) => ({...state, isLoading: true});
const userSetAuth0Reducer: FunctionReducer = (state, payload) => ({...state, isLoading: false, errors: null, currentUser: {...payload}});
const userFailureReducer: FunctionReducer = (state, payload) => ({...state, isLoading: false, errors: payload});
const userFetchFavoritesSuccess: FunctionReducer = (state, payload) => ({...state, isLoading: false, favoriteGrants: payload});
const userIsModeratorReducer: FunctionReducer = state => ({...state, isModerator: true});
const userSetTokenReducer: FunctionReducer = (state, payload) => ({...state, token: payload});
const userResetUserReducer: FunctionReducer = () => initialState;
const userRemoveFavoriteSuccessReducer: FunctionReducer = (state, payload) => {
    const newFavorites = state.favoriteGrants.filter(grant => grant.favoriteID !== payload);
    return {...state, favoriteGrants: newFavorites}

};
const userRemoveReducerStart: FunctionReducer = (state) => ({...state});
const userRemoveReducerSuccess: FunctionReducer = (state) => ({...state});
const userRemoveReducerFailure: FunctionReducer = (state, payload) => ({...state, errors: payload});

const userUpdateReducerStart: FunctionReducer = (state) => ({...state});
const userUpdateReducerSuccess: FunctionReducer = (state, payload) => ({...state, currentUser: {...payload}});
const userUpdateReducerFailure: FunctionReducer = (state, payload) => ({...state, errors: payload});




export const userReducer = createReducer(initialState, {
    [UserTypes.FETCH_FAVORITES_START]: userStartReducer,
    [UserTypes.FETCH_FAVORITES_SUCCESS]: userFetchFavoritesSuccess,
    [UserTypes.FETCH_FAVORITES_FAILURE]: userFailureReducer,
    [UserTypes.SET_USER_FROM_AUTH0]: userSetAuth0Reducer,
    [UserTypes.IS_MODERATOR]: userIsModeratorReducer,
    [UserTypes.SET_TOKEN]: userSetTokenReducer,
    [UserTypes.RESET_USER]: userResetUserReducer,
    [UserTypes.POST_FAVORITES_START]: userStartReducer,
    [UserTypes.POST_FAVORITES_SUCCESS]: userFetchFavoritesSuccess,
    [UserTypes.POST_FAVORITES_FAILURE]: userFailureReducer,
    [UserTypes.REMOVE_FAVORITES_FAILURE]: userFailureReducer,
    [UserTypes.REMOVE_FAVORITES_SUCCESS]: userRemoveFavoriteSuccessReducer,
    [UserTypes.REMOVE_USER_START]: userRemoveReducerStart,
    [UserTypes.REMOVE_USER_SUCCESS]: userRemoveReducerSuccess,
    [UserTypes.REMOVE_USER_FAILURE]: userRemoveReducerFailure,
    [UserTypes.UPDATE_USER_START]: userUpdateReducerStart,
    [UserTypes.UPDATE_USER_SUCCESS]: userUpdateReducerSuccess,
    [UserTypes.UPDATE_USER_FAILURE]: userUpdateReducerFailure,
});

