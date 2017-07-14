import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import { fromJS } from 'immutable';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware, { END } from 'redux-saga'
import createReducer from './reducer';
import createSaga from './saga';

export default function configureStore(history, initialState = {}) {
  const reducer = createReducer();
  const saga = createSaga();
  const sagaMiddleware = createSagaMiddleware(saga);
  const middlewares = [
    thunkMiddleware,
    promiseMiddleware,
    sagaMiddleware,
    routerMiddleware(history)
  ];

  const composeEnhancers =
    (global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
    global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    })) || compose;

  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares)
  );

  const store = createStore(
    reducer,
    fromJS(initialState),
    enhancer
  );

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);

  store.runSaga(saga)
  
  if (module.hot) {
    module.hot.accept('./reducer', () => {
      const createNextReducer = require('./reducer').default;
      const nextReducer = createNextReducer();

      store.replaceReducer(nextReducer);
    });
  }

  return store;
}