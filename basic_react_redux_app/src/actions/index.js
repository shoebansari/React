export const addTodo=(data)=>{
  return {
    type:"ADD_TODO",
    payload:{
      id:new Date().getTime().toString(),
      data:data
    }
  }
}

export const deleteTodo=(id)=>{
  return {
    type:"DELETE_TODO",
    id
  }
}

export const updateTodo=(updata)=>{
  return {
    type:"UPDATE_TODO",
    payload:updata
  }
}