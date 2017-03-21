import Redux from "redux";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {getRepoReducer, CounterReducer} from "./reducer/index.js";
import {combineEpics, createEpicMiddleware} from 'redux-observable';
import {counterEpic} from "./epic/epic.js"
import thunk from "redux-thunk";
import logger from "redux-logger";

export var storeConfig = function () {
    const rootEpic = combineEpics(counterEpic.increment);

    const epicMiddleware = createEpicMiddleware(rootEpic);
    
    var reducer = combineReducers({getRepoReducer, CounterReducer});

    const createStoreWithMiddleware = applyMiddleware(epicMiddleware)(createStore)

    const middleWare = applyMiddleware(epicMiddleware);
    var store = createStoreWithMiddleware(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
    );

    return store;
}