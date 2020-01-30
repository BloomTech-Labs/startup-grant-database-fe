import {GrantActions, GrantState, GrantTypes} from "./grantTypes";

const initialState: GrantState = {
    grants: [],
    showcase: null,
    isLoading: false,
    errors: null
};

export const grantReducer = (state = initialState, action: GrantActions): GrantState => {
    switch (action.type) {
        case GrantTypes.FETCH_GRANTS_START || GrantTypes.FETCH_ADMIN_GRANTS_START:
            return {...state, grants: [], isLoading: true, errors: null};
        case GrantTypes.FETCH_GRANTS_SUCCESS || GrantTypes.FETCH_ADMIN_GRANTS_SUCCESS:
            return {...state, grants: action.payload, isLoading: false, errors: null, showcase: action.payload[0]};
        case GrantTypes.FETCH_GRANTS_FAILURE || GrantTypes.FETCH_ADMIN_GRANTS_FAILURE:
            return {...state, grants: [], isLoading: false, errors: action.payload};
        case GrantTypes.SELECT_GRANT:
            return {...state, showcase: action.payload};
        default:
            return state;
    }
};
