import actions from './action'
import { handleAction, handleActions, combineActions } from 'redux-actions'

const addTodo = handleAction(actions.addTodo, (state, action) => ({
  xx: state.xx + action.payload
}), { xx: 200 })

export default {
  addTodo
}