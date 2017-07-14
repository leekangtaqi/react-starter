import { wireSagasInModules } from './util'
import { fork } from 'redux-saga/effects'

export default function createSaga() {
  const sagas = wireSagasInModules()
  const rootSaga = function*(){
    for (let i=0, len=sagas.length; i<len; i++) {
      yield fork(sagas[i])
    }
  }
  return rootSaga
}