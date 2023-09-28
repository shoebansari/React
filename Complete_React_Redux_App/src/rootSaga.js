import { all, fork } from 'redux-saga/effects';
import { watchEmployeeList } from './sagas/employeeSaga';

function* rootSaga() {
	yield all([fork(watchEmployeeList)]);
}

export default rootSaga;
