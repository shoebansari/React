import {connect} from 'react-redux';
import EmployeeComponent from './EmployeeComponent';

import {fecthEmployeeList} from '../../redux/employeeList/employeeListAction';
import {getEmployeeList} from '../../redux/employeeList/employeeListSelector'

const mapStatetoProps=(state)=>{

  return{
    employeeList:getEmployeeList(state)
  }
}

const mapDispatchToProps={
  fecthEmployeeList: fecthEmployeeList
}

export default connect(mapStatetoProps,mapDispatchToProps)(EmployeeComponent)