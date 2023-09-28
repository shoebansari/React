import { useState, useMemo, useCallback } from 'react'
import Child from './Child'
////https://www.youtube.com/watch?v=_lV_UP25YEs
const PreventRerender=()=>{

  const [count, setCount] = useState(0)
  //This will work and child will not be re-render. but will only be work when dependecy Array is blank.
  const data = useMemo(()=>[1,2],[])

  //if we pass this as prop then child will again start re-rending, because this is callbyreference each time it has new reference 
  //and it re-render this component with new reference value to array,
  //If we put this out of the function then re-render will not work.
  //const data = [1,2] 

  //If we use this without callback then again it will start to render, So put it inside callback with bank dependency
  const fetchData=useCallback((type)=>{
    return type+'Hello'
  },[])

  return(
    <div>
      {count}
      <button onClick={()=>setCount(count+1)}>Increament</button>
      <Child childeren="Child Component" data={data} fetchData={fetchData}/>
    </div>
  )
}

export default PreventRerender;