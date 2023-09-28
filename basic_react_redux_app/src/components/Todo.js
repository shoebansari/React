import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {addTodo,deleteTodo,updateTodo} from '../actions/index'
import _ from 'loadsh';

const Todo=()=>{
const [inputData, setInputData] =useState('')
const [isUpdate, setIsUpdate] =useState(false)
const [selectedId, setSelectedId] = useState(0);
const list  =  useSelector((state)=>state.todoReducer.list)
const dispatch = useDispatch();
 const editData = (item)=>{
  setInputData(item.data)
  setIsUpdate(true);
  setSelectedId(item.id)
 } 

  return (
    <div>
      Add your list
      <div>
        <input
          type="text"
          placeholder="Add Items"
          value={inputData}
          onChange={(event) => setInputData(event.target.value)}
        />

        {isUpdate ? (
          <button
            onClick={() =>dispatch(updateTodo({inputData,selectedId}))}
          >
            Update
          </button>
        ) : (
          <button
            onClick={() =>
              dispatch(addTodo(inputData), setInputData(""), setIsUpdate(false))
            }
          >
            Add
          </button>
        )}
      </div>
      <div>
        {list.map((item) => {
          return (
            <div key={item.id}>
              <h4>{item.data}</h4>
              <button onClick={() => dispatch(deleteTodo(item.id))}>
                DELETE
              </button>
              <button onClick={() => editData(item)}>EDIT</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Todo;