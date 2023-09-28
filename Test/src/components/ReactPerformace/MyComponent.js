import jsonFile from './sample.json'
import { useCallback, useEffect, useMemo } from 'react';

const getLength=(file)=>{
    let count=0;
    const lg = file.test.Items.length;
    for(let i=0;i<lg;i++) count++ 
    return count;
}

//1-Make  this component as lazy load
const MyComponent=({count})=>{
    const totalEntries = useMemo(()=>getLength(jsonFile),[]);
    //window.addEventListener('load',()=>console.log('Event listner-load'))
    const loadEvent = useCallback(()=>{
      console.log('Event listner-load')
    },[])

    useEffect(()=>{
        window.addEventListener("load",loadEvent)

        //This is known as cleanup or unmount method.
        //(This video for cleanup or unmount) https://www.youtube.com/watch?v=5gCtW7RCtQA
        return ()=>{
            window.removeEventListener("load",loadEvent)
        }
    },[count,loadEvent])
    return (
        <div>
            <h4>React Performance Componet</h4>
            <h3>Total Entries:{totalEntries}</h3>
            <h3>Count:</h3>{count}
        </div>
    )
}

export default MyComponent;