import react, { useState, useRef } from 'react'

const Controlled=()=>{
  const [name, setName] = useState('')


  return (
    <div>
      <form>
      <input type="text" onChange={e=>setName(e.target.value)} value={name}></input>
      <br></br>
      </form>
      {name}
    </div>
  )
}

export default Controlled