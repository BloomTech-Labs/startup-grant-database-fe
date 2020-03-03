import {combineReducers} from "redux";
import {userReducer as user} from "./user/userReducer";
import {grantReducer as grants} from "./grants/grantReducer";
import {filterReducer as filters} from "./filters/filterReducer";
import {adminReducer as admin} from "./admin/adminReducer";
import {suggestionReducer as suggestion} from "./suggestions/suggestionReducer";

export const rootReducer = combineReducers({
    user,
    grants,
    filters,
    admin,
    suggestion
});

export type AppState = ReturnType<typeof rootReducer>;
