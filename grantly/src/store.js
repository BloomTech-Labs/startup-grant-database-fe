import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { rooterReducer } from "./reducers";

export const store = createStore(
  rooterReducer,
  composeWithDevTools(applyMiddleware(thunk, logger))
);
