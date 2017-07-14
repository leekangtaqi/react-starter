import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutablejs';
import {
  setToImmutableStateFunc,
  setToMutableStateFunc,
  immutableReducer as reduxAsyncConnect
} from 'redux-connect';
import routeReducer from './routing';
import { wireReducersInModules } from './util';

setToImmutableStateFunc(mutableState => fromJS(mutableState));
setToMutableStateFunc(immutableState => immutableState.toJS());

export default function createReducer() {
  let reducers = wireReducersInModules()
  return combineReducers({
    reduxAsyncConnect,
    routing: routeReducer,
    ...reducers
  });
}

