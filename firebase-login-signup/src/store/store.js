import { createStore, applyMiddleware, combineReducers } from "redux";
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import thunk from "redux-thunk";
import {createLogger} from "redux-logger"
import {SignUpReducer} from "./reducer"

import {LoginEpic} from "./epic"
const logger = createLogger();

const rootEpic = combineEpics(
    LoginEpic.login
)
const rootReducer = combineReducers({
     SignUpReducer
})

const epicMiddleware = createEpicMiddleware(rootEpic);

const createStoreWithMiddleware = applyMiddleware(thunk,logger,epicMiddleware)(createStore);


// const middle = applyMiddleware(thunk,logger)(epicMiddleware);
// export const store = createStore(rootReducer, middle);
export let store = createStoreWithMiddleware(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)