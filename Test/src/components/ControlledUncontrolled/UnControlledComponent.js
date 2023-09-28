import { useRef } from "react";

function UnControlledComponent() {
  const inputName = useRef()

  const onSubmit = ()=>{
    console.log('asd', inputName.current.value)
  }
  return (
    <div className="App">
      <input type="text" ref={inputName}></input>
      <h1>UnControlled Component</h1>
      <button onClick={()=>onSubmit()}>Submit</button>
    </div>
  );
}

export default UnControlledComponent;
