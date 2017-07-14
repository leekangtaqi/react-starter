import { put, fork, takeLatest, call } from 'redux-saga/effects';
import actions from '../../event-definition';

export default function* () {
  yield takeLatest(actions.addTodo, function* (action) {
    yield put({type: '111', payload: action.payload})
  })
}
