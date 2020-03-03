export enum SuggestionTypes {
    SELECT_SUGGESTION_START = "SELECT_SUGGESTION_START",
    SELECT_SUGGESTION_SUCCESS = "SELECT_SUGGESTION_SUCCESS",
    SELECT_SUGGESTION_FAILURE = "SELECT_SUGGESTION_FAILURE",
    DELETE_SUGGESTION_START = "DELETE_SUGGESTION_START",
    DELETE_SUGGESTION_SUCCESS = "DELETE_SUGGESTION_SUCCESS",
    DELETE_SUGGESTION_FAILURE = "DELETE_SUGGESTION_FAILURE",
    FETCH_SUGGESTION_START = "FETCH_SUGGESTION_START",
    FETCH_SUGGESTION_SUCCESS = "FETCH_SUGGESTION_SUCCESS",
    FETCH_SUGGESTION_FAILURE = "FETCH_SUGGESTION_FAILURE",
    ADD_SUGGESTION_START = "ADD_SUGGESTION_START",
    ADD_SUGGESTION_SUCCESS = "ADD_SUGGESTION_SUCCESS",
    ADD_SUGGESTION_FAILURE = "ADD_SUGGESTION_FAILURE",
    RESET_SUCCESS = "RESET_SUCCESS"
}

export interface Suggestion {
    id?: number;
    subject: string | null;
    suggestion: string | null;
    isSelecting: number | boolean;
    isFetching: number | boolean;
}

export interface SuggestionState {
    grant_suggestions: Suggestion[];
    errors: Error | null;
    isLoading: boolean;
    isSelecting: boolean;
    isSuccess: boolean;
}

interface FetchSuggestionStart {
    type: typeof SuggestionTypes.FETCH_SUGGESTION_START;
    isFetching: boolean;
}

interface ResetSuccess {
    type: typeof SuggestionTypes.RESET_SUCCESS;
}

interface FetchSuggestionSuccess {
    type: typeof SuggestionTypes.FETCH_SUGGESTION_SUCCESS;
    payload: Suggestion[];
}

interface FetchSuggestionFailure {
    type: typeof SuggestionTypes.FETCH_SUGGESTION_FAILURE;
    payload: Error;
}

interface SelectSuggestionStart {
    type: typeof SuggestionTypes.SELECT_SUGGESTION_START;
    isSelecting: boolean;
}

interface SelectSuggestionSuccess {
    type: typeof SuggestionTypes.SELECT_SUGGESTION_SUCCESS;
    payload: Suggestion[];
}

interface SelectSuggestionFailure {
    type: typeof SuggestionTypes.SELECT_SUGGESTION_FAILURE;
    payload: Error;
}

interface DeleteSuggestionStart {
    type: typeof SuggestionTypes.DELETE_SUGGESTION_START;
}

interface DeleteSuggestionSuccess {
    type: typeof SuggestionTypes.DELETE_SUGGESTION_SUCCESS;
}

interface DeleteSuggestionFailure {
    type: typeof SuggestionTypes.DELETE_SUGGESTION_FAILURE;
    payload: Error;
}

interface AddSuggestionStart {
    type: typeof SuggestionTypes.ADD_SUGGESTION_START;
}

interface AddSuggestionSuccess {
    type: typeof SuggestionTypes.ADD_SUGGESTION_SUCCESS;
    isLoading: boolean;
    payload: Suggestion[];
}

interface AddSuggestionFailure {
    type: typeof SuggestionTypes.ADD_SUGGESTION_FAILURE;
    payload: Error;
}

export type SuggestionActions =
    | SelectSuggestionStart
    | SelectSuggestionSuccess
    | SelectSuggestionFailure
    | FetchSuggestionStart
    | FetchSuggestionSuccess
    | FetchSuggestionFailure
    | DeleteSuggestionStart
    | DeleteSuggestionSuccess
    | DeleteSuggestionFailure
    | AddSuggestionStart
    | AddSuggestionSuccess
    | AddSuggestionFailure
    | ResetSuccess;
