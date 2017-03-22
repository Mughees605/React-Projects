import Redux from "redux";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {TodoReducer} from "./reducer/index.js";
import {combineEpics, createEpicMiddleware} from 'redux-observable';
import {todoEpic} from "./epic/epic.js"
import thunk from "redux-thunk";
import logger from "redux-logger";

export var storeConfig = function () {
    const rootEpic = combineEpics(todoEpic.addTodo,todoEpic.getTodos);

    const epicMiddleware = createEpicMiddleware(rootEpic);
    
    var reducer = combineReducers({TodoReducer});

    const createStoreWithMiddleware = applyMiddleware(epicMiddleware,logger())(createStore)

    const middleWare = applyMiddleware(epicMiddleware);
    var store = createStoreWithMiddleware(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
    );

    return store;
}