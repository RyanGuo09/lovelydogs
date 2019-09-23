import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import rootSaga from '../sagas/rootSaga';
import rootReducer from '../reducers/rootReducer';
export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  let enhancer;
  if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(applyMiddleware(sagaMiddleware, logger));
  } else {
    enhancer = compose(applyMiddleware(sagaMiddleware, logger));
  }
  const store = createStore(rootReducer, enhancer);
  sagaMiddleware.run(rootSaga);
  return store;
}
