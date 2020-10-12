import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import staticReducers from './reducers';
import staticSagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(sagaMiddleware);

const store = createStore(
    staticReducers,
    composeWithDevTools(middleware),
);

sagaMiddleware.run(staticSagas);

export default store;