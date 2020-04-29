import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import logger from "redux-logger";
import {rootReducer} from "./rooterReducer";

const store =
    process.env.NODE_ENV === "development"
        ? createStore(rootReducer, composeWithDevTools())
        : createStore(rootReducer);

export default store;
