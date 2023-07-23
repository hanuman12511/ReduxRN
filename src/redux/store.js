import {combineReducers,compose,createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import * as Reducer from './index';
const rootReducer=combineReducers(Reducer);
const middle = applyMiddleware(thunk,promise,logger)
const store=createStore(rootReducer,compose(middle));

export default store;