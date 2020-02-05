import {Reducer} from "redux";

interface FunctionMap {
    [key: string]: any
}

type CreateReducer<S = any, F extends FunctionMap = any> = (state: S, fnMap: F) => Reducer;

export const createReducer: CreateReducer = (initialState, fnMap) => (state = initialState, {type, payload}) => {
    const handler = fnMap[type];
    return handler ? handler(state, payload) : state;
};
