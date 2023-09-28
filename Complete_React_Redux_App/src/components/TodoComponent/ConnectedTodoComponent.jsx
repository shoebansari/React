
import {connect} from 'react-redux'
import TodoComponent from './TodoComponent';
import {addTodo, deleteTodo, updateTodo} from '../../redux/todo/todoAction';
import {getTodoList} from '../../redux/todo/todoSelector'

const mapStateToProps=(state)=>{

  return{
    list:getTodoList(state)
  }
}


const mapDispatchToProps={
  addTodo,
  deleteTodo,
  updateTodo,
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoComponent)