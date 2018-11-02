import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise';
// import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';

// Redux console logger
const logger = createLogger({ collapsed: true })

// Redux DevTools Extension for Chrome and Firefox
const reduxDevTool = () => {
  return typeof window === 'object' &&
  typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
}

export default function configureStore(initialState, history) {
  const isDev = process.env.NODE_ENV === 'development';
  let middlewares = [promiseMiddleware];
  let composedStoreEnhancer = null;

  if(isDev) {
    middlewares = applyMiddleware(...middlewares.concat([logger]))
    composedStoreEnhancer = compose(middlewares, reduxDevTool())
  } else {
    middlewares = applyMiddleware(...middlewares)
  }

  const store = composedStoreEnhancer ? composedStoreEnhancer(createStore)(rootReducer, initialState) : createStore(rootReducer, initialState, middlewares)

  if (isDev && module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers/index')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store;
}
