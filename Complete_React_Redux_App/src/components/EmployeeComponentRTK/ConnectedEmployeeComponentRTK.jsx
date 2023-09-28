import {connect} from 'react-redux';
import EmployeeComponentRTK from './EmployeeComponentRTK';
import {getEmployeeListRTK} from '../../redux/employeeListRTK/employeeListSelectorRTK';
import {actions} from '../../redux/employeeListRTK/employeeListRTK'

const mapStatetoProps=(state)=>{
  return{
    employeeList:getEmployeeListRTK(state)
  }
}

const mapDispatchToProps={
  fecthEmployeeListRTK: actions.fetchEmployeeListRTK
}

export default connect(mapStatetoProps,mapDispatchToProps)(EmployeeComponentRTK)