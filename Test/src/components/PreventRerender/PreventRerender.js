import { useState,useMemo, useCallback } from "react"
import Child from './child'

//https://www.youtube.com/watch?v=_lV_UP25YEs
const PreventRerender = ()=>{
    const [count, setCount]=useState(0)
    const arr = useMemo(()=>[1,2],[])

    const fetchData=useCallback((type)=>{
        return type+'Hello'
      },[])
    
    return(
            <div>
                Prevent Re-render component
                <h1>Count {count}</h1>
                <button onClick={()=>setCount(count+1)}>Add Count</button>
                <Child name='shoeb' arr={arr} fetchData={fetchData}/>
            </div>
    )
}

export default PreventRerender;