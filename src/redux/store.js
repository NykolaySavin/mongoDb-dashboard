import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducer';
import rootSaga from './saga/index';
import { state } from './state/app.state';
import initializeStore from './state/initializeStore';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    state,
    applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(rootSaga);
initializeStore(store);
export default store;