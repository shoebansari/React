import {memo } from "react";

const  Child=({name})=> {
    console.log('CHILD', name)
  return (
    <div className="App">
      <h1>CHILD COMPONENT</h1>
    </div>
  );
}

export default memo(Child);