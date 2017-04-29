import { applyMiddleware, createStore, compose } from 'redux'
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers'


import AuthMiddleware from './middleware/authMiddleware'

export {
    AuthMiddleware
    // other Middlewares here
}

let middleware;

if (process.env.NODE_ENV === 'production') {
    middleware = compose(applyMiddleware(thunk,logger()));
} else {
    middleware = compose(
        applyMiddleware(thunk,logger),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}


export let store = createStore(
    rootReducer,
    middleware
);