import {combineReducers} from "redux";
import {userReducer as user} from "./user/userReducer";
import {grantReducer as grants} from "./grants/grantReducer";
import {filterReducer as filters} from "./filters/filterReducer";

export const rootReducer = combineReducers({
    user,
    grants,
    filters
});

export type AppState = ReturnType<typeof rootReducer>
