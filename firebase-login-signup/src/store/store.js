import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import {createLogger} from "redux-logger"
import {SignUpReducer} from "./reducer"
const logger = createLogger();

const root = combineReducers({
     SignUpReducer
})
const middle = applyMiddleware(thunk,logger);
export const store = createStore(root, middle);