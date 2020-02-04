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
    },
    token: null,
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

export const userReducer = createReducer(initialState, {
    [UserTypes.FETCH_FAVORITES_START]: userStartReducer,
    [UserTypes.FETCH_FAVORITES_SUCCESS]: userFetchFavoritesSuccess,
    [UserTypes.FETCH_FAVORITES_FAILURE]: userFailureReducer,
    [UserTypes.SET_USER_FROM_AUTH0]: userSetAuth0Reducer,
    [UserTypes.IS_MODERATOR]: userIsModeratorReducer,
    [UserTypes.SET_TOKEN]: userSetTokenReducer,
    [UserTypes.RESET_USER]: userResetUserReducer,
    [UserTypes.POST_FAVORITES_START]: userStartReducer
});

