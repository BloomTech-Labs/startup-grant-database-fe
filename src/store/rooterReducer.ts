import {combineReducers} from "redux";
import {userReducer as user} from "./user/userReducer";
import {grantReducer as grants} from "./grants/grantReducer";
import {filterReducer as filters} from "./filters/filterReducer";
import {adminReducer as admin} from "./admin/adminReducer";

export const rootReducer = combineReducers({
    user,
    grants,
    filters,
    admin
});

export type AppState = ReturnType<typeof rootReducer>
