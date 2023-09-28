// https://www.youtube.com/watch?v=2qlij2qkHZc
import { useState } from 'react'
import {addUser} from './store/userSlice/useDetails'
import { useDispatch } from 'react-redux'

function App() {
  const [name,setName] = useState('')

  const dispatch = useDispatch();

  return (
    <div>
      <input type='text' value={name} onChange={(e)=>setName(e.target.value)}></input>
      <button onClick={()=>dispatch(addUser(name))}>Submit</button>
    </div>
  )
}

export default App
