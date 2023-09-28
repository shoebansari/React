import  { useState, useRef } from 'react'
import Controlled from './Controlled'

//in Controlled component form data is handled by react component, if hadling data using state is known as controlled comp.
//in uncontrolled component form data is controlled by DOM itself,if handling data using ref known as uncontrolled com.


const Uncontrolled=()=>{
  const [name, setName] = useState('')

  const input = useRef(null)

  const handleClick=(e)=>{
    e.preventDefault()
    setName(input.current.value)
  }
  return (
    <div>
      <form>
      <input type="text" ref={input}></input>
      <br></br>
      <input type="submit" onClick={handleClick}></input>
      </form>
      {name}
      <Controlled/>
    </div>
  )
}

export default Uncontrolled