import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { rooterReducer } from "./reducers";

// enabling Logger
const middleware = [thunk, logger];
const enhancers = applyMiddleware(...middleware);

export const store = createStore(
  rooterReducer,
  composeWithDevTools(enhancers)
);
