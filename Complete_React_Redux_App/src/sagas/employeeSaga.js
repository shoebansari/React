import { takeLatest, call, put } from 'redux-saga/effects';
import {getEmployeesApi} from '../apis/employeApi'
import actionType from '../redux/employeeList/employeeListAction'
import {setEmployeeList} from '../redux/employeeList/employeeListAction';
import { actions } from '../redux/employeeListRTK/employeeListRTK';


function* fetchEmployeeLists() {
	try {
    const response = yield call(getEmployeesApi);
		yield put(setEmployeeList(response.data));
    
	} catch (error) {
		//logger.error('Failed on attempting to call Postal Codes API via Anxious', error);
		return error;
	}
}

function* fetchEmployeeListsRTK() {
	try {
    const response = yield call(getEmployeesApi);
		yield put(actions.setEmployeeList(response.data));
    
	} catch (error) {
		//logger.error('Failed on attempting to call Postal Codes API via Anxious', error);
		return error;
	}
}


function* watchEmployeeList() {
	yield takeLatest(actionType.FETCH_EMPLOYEE_LISTS, fetchEmployeeLists);
	yield takeLatest(actions.fetchEmployeeListRTK, fetchEmployeeListsRTK);
}

export {
	watchEmployeeList,
};