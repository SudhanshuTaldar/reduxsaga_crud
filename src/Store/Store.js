import reducer from '../Reducer/Reducer';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {All} from '../Saga/Saga'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

const store =createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(All)

export default store;