import {SuggestionActions, SuggestionState, SuggestionTypes} from "./suggestionTypes";

const initialState: SuggestionState = {
    grant_suggestions: [],
    isSelecting: false,
    isLoading: true,
    isSuccess: false,
    errors: null
};

export const suggestionReducer = (
    state = initialState,
    action: SuggestionActions
): SuggestionState => {
    switch (action.type) {
        case SuggestionTypes.SELECT_SUGGESTION_START:
            return {...state, isSelecting: true};
        case SuggestionTypes.SELECT_SUGGESTION_SUCCESS:
            return {...state, grant_suggestions: action.payload};
        case SuggestionTypes.SELECT_SUGGESTION_FAILURE:
            return {...state, errors: action.payload};
        case SuggestionTypes.FETCH_SUGGESTION_START:
            return {...state};
        case SuggestionTypes.FETCH_SUGGESTION_SUCCESS:
            return {...state, grant_suggestions: action.payload};
        case SuggestionTypes.FETCH_SUGGESTION_FAILURE:
            return {...state, errors: action.payload};
        case SuggestionTypes.DELETE_SUGGESTION_START:
            return {...state};
        case SuggestionTypes.DELETE_SUGGESTION_SUCCESS:
            return {...state};
        case SuggestionTypes.DELETE_SUGGESTION_FAILURE:
            return {...state, errors: action.payload};
        case SuggestionTypes.ADD_SUGGESTION_START:
            return {...state};
        case SuggestionTypes.ADD_SUGGESTION_SUCCESS:
            return {
                ...state,
                isLoading: false,
                grant_suggestions: action.payload,
                isSuccess: true
            };
        case SuggestionTypes.ADD_SUGGESTION_FAILURE:
            return {...state, errors: action.payload};
        case SuggestionTypes.RESET_SUCCESS:
            return {...state, isSuccess: false};
        default:
            return state;
    }
};
