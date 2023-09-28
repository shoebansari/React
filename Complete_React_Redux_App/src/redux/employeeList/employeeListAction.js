
const getActionType = (type) => `src/action/employeeList - ${type}`;

const actionType =  {
  FETCH_EMPLOYEE_LISTS:getActionType('FETCH_EMPLOYEE_LISTS'),
  SET_EMPLOYEE_LISTS:getActionType('SET_EMPLOYEE_LISTS'),
}

export default actionType;
 
const fecthEmployeeList=(data)=>{
  return {
    type:actionType.FETCH_EMPLOYEE_LISTS,
    payload:data
  }
}

const setEmployeeList=(data)=>{
  return {
    type:actionType.SET_EMPLOYEE_LISTS,
    data
  }
}

export {
  fecthEmployeeList,
  setEmployeeList,
}