import React, { useCallback, useMemo, useRef, useState } from 'react';
import TODO from './TODO'

const App = () => {

  interface Istudent{
    name:string,
    id:number,
  }

  const studentDetails:Istudent={
    name:'shoeb',
    id:1,
    address:'hadoi'
  }

  return (
    <div>
    <button onClick= {()=> dispatch({ type: 'increament' })}> Increament < /button>
    < button onClick = {()=> dispatch({ type: 'decreament' })}> Decreament < /button>
     < /div>
  )
}

export default App;