import actionType from './employeeListAction';
import { combineReducers } from 'redux';

const initialData = {
  employeeList: []
};

const employeeList = (state = initialData.employeeList, action) => {
  switch (action.type) {
    case actionType.SET_EMPLOYEE_LISTS:
      
      return action.data;
    default:
      return state;
  }
};

export default combineReducers({
  employeeList
})
