import {UserActions, UserState, UserTypes} from "./userTypes";

const initialState: UserState = {
    currentUser: {
        email: '',
        role: ''
    },
    isLoading: false,
    errors: null,
};

export const userReducer = (state = initialState, action: UserActions): UserState => {
    switch (action.type) {
        case UserTypes.FETCH_USER_START:
            return {...state, isLoading: true};
        case UserTypes.FETCH_USER_SUCCESS:
            return {...state, isLoading: false, errors: null, currentUser: action.payload};
        case UserTypes.FETCH_USER_FAILURE:
            return {...state, isLoading: false, errors: action.payload};
        default:
            return state;
    }
};
