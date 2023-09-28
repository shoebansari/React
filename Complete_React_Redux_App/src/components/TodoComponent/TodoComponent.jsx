import React, { useState } from "react";
import _ from "loadsh";

const Todo = ({ addTodo, deleteTodo, updateTodo, list }) => {
  const [inputData, setInputData] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [selectedId, setSelectedId] = useState(0);

  const editData = (item) => {
    setInputData(item.data);
    setIsUpdate(true);
    setSelectedId(item.id);
  };

  const addItems = () => {
    if (!_.isEmpty(inputData)) {
      addTodo(inputData);
      resetData();
    }
  };

  const updateItems = () => {
    if (!_.isEmpty(inputData)) {
      updateTodo({ inputData, selectedId });
      resetData();
    }
  };

  const resetData = () => {
    setInputData("");
    setIsUpdate(false);
  };

  return (
    <div className="todoContainer">
      <h2>Add your list</h2>
      <div className="todoContainer-top">
        <div className="todoContainer-top-txt">
          <input
            type="text"
            placeholder="Add Items"
            value={inputData}
            onChange={(event) => setInputData(event.target.value)}
          />
        </div>
        <div className="todoContainer-top-btn">
          {isUpdate ? (
            <button onClick={updateItems}>Update Item</button>
          ) : (
            <button onClick={addItems}>Add Item</button>
          )}
        </div>
      </div>
      <div className="todoContainer-margintop">
        {!_.isEmpty(list) &&
          list.map((item) => {
            return (
              <div key={item.id} className="todoContainer-list">
                <div className="todoContainer-list-divided">
                  <h4>{item.data}</h4>
                </div>
                <div>
                  <button onClick={() => deleteTodo(item.id)}>DELETE</button>
                  <button onClick={() => editData(item)}>EDIT</button>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Todo;
