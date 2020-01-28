import {combineReducers} from "redux";
import {userReducer as user} from "./user/userReducer";
import {grantReducer as grants} from "./grants/grantReducer";

export const rootReducer = combineReducers({
    user,
    grants
});

export type AppState = ReturnType<typeof rootReducer>
