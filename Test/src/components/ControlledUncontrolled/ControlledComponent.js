import { useState } from "react";

function ControlledComponent() {

  const [name,setName] = useState('')

  return (
    <div className="App">
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
      <h1>Controlled Component</h1>
    </div>
  );
}

export default ControlledComponent;
