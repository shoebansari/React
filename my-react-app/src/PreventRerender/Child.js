
import {memo} from 'react'

const Child=({childeren, data})=>{
  console.log('Child');
  
  return(
    <div>
      {childeren}
    </div>
  )
}

//Memo is used to prevent child component to re render
export default memo(Child);
