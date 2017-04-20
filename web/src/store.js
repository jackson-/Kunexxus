import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import { promiseMiddleware } from './middleware';
import auth from './reducers/auth';
import common from './reducers/common';
import home from './reducers/home';
import projects from './reducers/projects';
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas';

const reducer = combineReducers({
  auth,
  common,
  home,
  projects
});

const sagaMiddleware = createSagaMiddleware()

const middleware = applyMiddleware(promiseMiddleware, sagaMiddleware);

const store = createStore(reducer, compose(middleware, window.devToolsExtension ? window.devToolsExtension() : f => f));

sagaMiddleware.run(sagas)

export default store;
