import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import Reducers from '../reducers';
import rootSaga from '../sagas/rootSagas';

const sagaMiddleware = createSagaMiddleware();

export const Store = createStore(
  Reducers,
  applyMiddleware(logger, thunk, sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

export default Store;

