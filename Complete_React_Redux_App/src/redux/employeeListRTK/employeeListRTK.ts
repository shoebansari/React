import { createAction, createReducer } from "@reduxjs/toolkit";
import { rtkPayload, IEmployeeListRTK } from "./employeeListInterface";

const initialState: IEmployeeListRTK = {
  employeelist: {
    id: 0,
    first_name: "",
    last_name: "",
    email: "",
  },
  loading:false,
};

const getType = (type: string) => `EmployeeListRTK_${type}`;

const actions = {
  fetchEmployeeListRTK: createAction(
    getType("FETCH_EMPLOYEE_LISTS"),
    rtkPayload<any>()
  ),
  setEmployeeList: createAction(
    getType("SET_EMPLOYEE_LISTS"),
    rtkPayload<any>()
  ),
  setLoading: createAction(
    getType("SET_LOADING"),
    rtkPayload<any>()
  ),
};

const reducers = 
    createReducer(initialState, {
    [actions.setEmployeeList.type]: (state, { payload: data }) => {
      return {...state,employeelist:data}
    },
  })


export { actions, reducers };
