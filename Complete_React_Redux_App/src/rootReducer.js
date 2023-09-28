import todoReducer from './redux/todo/todoReducers'
import employeeListReducer from './redux/employeeList/employeeListReducers'
import {reducers as employeeListReducerRTK } from './redux/employeeListRTK/employeeListRTK'
import {combineReducers} from 'redux';

const rootReducer=combineReducers({
  todoReducer,
  employeeListReducer,
  employeeListReducerRTK,
})

export default rootReducer;