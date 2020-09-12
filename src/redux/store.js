import { createStore, applyMiddleware } from "redux";
import rootReducer from "./root-reducer";
import logger from "redux-logger";

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;
