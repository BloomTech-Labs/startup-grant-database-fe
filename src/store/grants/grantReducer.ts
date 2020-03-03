import {Grant, GrantActions, GrantState, GrantTypes} from "./grantTypes";
import {createReducer} from "../utils/createReducer";

const initialState: GrantState = {
    grants: [],
    publicGrants: [],
    showcase: null,
    isLoading: false,
    errors: null
};

type FunctionReducer<S extends GrantState = GrantState,
    P extends GrantActions = GrantActions> = (state: GrantState, payload?: any) => GrantState;

const randomShowCase = (grants: Grant[]): number => {
    return Math.ceil(Math.random() * grants.length + 1);
};

const randomThreeGrants = (grants: Grant[]): Grant[] => {
    const selectGrants = grants.sort(() => Math.random() - 0.5);
    return [selectGrants[0], selectGrants[1], selectGrants[2]];
};

const grantStartReducer: FunctionReducer = (state: GrantState) => ({
    ...state,
    isLoading: true,
    errors: null
});

const grantFailureReducer: FunctionReducer = (
    state: GrantState,
    payload: any
) => ({...state, isLoading: false, errors: payload});

const grantsSuccessReducer: FunctionReducer = (state, payload) => ({
    ...state,
    grants: payload,
    publicGrants: randomThreeGrants(payload),
    showcase: payload[randomShowCase(payload)],
    isLoading: false
});

const grantsPostSuccessReducer: FunctionReducer = state => ({
    ...state,
    isLoading: false
});

const selectGrantReducer: FunctionReducer = (state, payload) => ({
    ...state,
    showcase: payload
});

export const grantReducer = createReducer(initialState, {
    [GrantTypes.SELECT_GRANT]: selectGrantReducer,
    [GrantTypes.FETCH_GRANTS_START]: grantStartReducer,
    [GrantTypes.FETCH_GRANTS_SUCCESS]: grantsSuccessReducer,
    [GrantTypes.FETCH_GRANTS_FAILURE]: grantFailureReducer,
    [GrantTypes.POST_GRANTS_START]: grantStartReducer,
    [GrantTypes.POST_GRANTS_SUCCESS]: grantsPostSuccessReducer,
    [GrantTypes.POST_GRANTS_FAILURE]: grantFailureReducer
});
