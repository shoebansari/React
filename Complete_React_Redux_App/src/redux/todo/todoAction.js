
const getActionType = (type) => `src/action/todo - ${type}`;

const actionType =  {
  INITIALIZE:getActionType('INITIALIZE'),
  ADD_TODO:getActionType('ADD_TODO'),
  DELETE_TODO:getActionType('DELETE_TODO'),
  UPDATE_TODO:getActionType('UPDATE_TODO'),
}

export default actionType;
 
const addTodo=(data)=>{
  return {
    type:actionType.ADD_TODO,
    payload:{
      id:new Date().getTime().toString(),
      data:data
    }
  }
}

const deleteTodo=(id)=>{
  return {
    type:actionType.DELETE_TODO,
    id
  }
}

const updateTodo=(updata)=>{
  return {
    type:actionType.UPDATE_TODO,
    payload:updata
  }
}

export {
  addTodo,
  deleteTodo,
  updateTodo
}