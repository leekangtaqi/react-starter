import { createAction, createActions } from 'redux-actions'
import actions from '../../event-definition'

export default {
  addTodo: createAction(actions.addTodo)
}