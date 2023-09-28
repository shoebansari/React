import React, { useState } from "react";

const App = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const [isEdit, setEdit] = useState(false);
  const [selectedId, setSelectedId] = useState(0);

  const saveData = () => {
    if (inputData) {
      if (isEdit) {
       setItems(items.map((item)=>item.id===selectedId?{id:selectedId,name:inputData}:item))
       setEdit(false)
      } else {
        setItems([...items,{id: new Date().getTime().toString(),name:inputData}]);
      }
      setInputData("");
    }
  };
  const removeItem = (id) => {
    const filterData = items.filter((item) => item.id !== id);
    setItems(filterData);
  };

  const editItem = (id) => {
    const findData = items.find((item) => item.id === id);
    setInputData(findData.name);
    setEdit(true)
    setSelectedId(id)
  };
  return (
    <div>
      <div style={{ margin: "5px", "float":"left" }}>
        <input
          type="text"
          value={inputData}
          onChange={(event) => setInputData(event.target.value)}
        />
      </div>
      <div>
        <button onClick={saveData}>{isEdit ? "Update" : "Save"}</button>
      </div>
      {items.map(({ name, id }) => {
        return (
          <div key={id} style={{ width: "100%", "margin-top": "50px" }}>
            <div
              style={{ width: "50%", float: "left", border: "1px solid black" }}
            >
              {name}
            </div>
            <div style={{ width: "45%", float: "left" }}>
              <button onClick={() => removeItem(id)}>Remove</button>
              <button onClick={() => editItem(id)}>Edit</button>
            </div>
            <div></div>
          </div>
        );
      })}
      <div style={{"float":"left", "margin":"10px"}}>
        total items in list {items.length}
      </div>
    </div>
  );
};

export default App;
