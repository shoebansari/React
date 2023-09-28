import {compose, createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';

import rootSaga from './rootSaga';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true })) || compose;

const middlewares = [sagaMiddleware];

	const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewares)));
	sagaMiddleware.run(rootSaga);

	export default store;

