import { useEffect } from "react";

//By removing strict.mode from index.js, it will not re-render component twice.
//Strict Mode renders component twice in dev mode not on production in order to detect any problem with your code
// and warn you about them(which can be quite helpfull)
const CheckComponent=()=>{
    console.log('Check Comp')

    useEffect(()=>{
        console.log('Use effect')
    },[])
    return (
        <div>Check Component</div>
    )
}

export default CheckComponent;