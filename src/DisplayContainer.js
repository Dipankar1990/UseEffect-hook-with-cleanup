import React,{useState} from 'react';
import HookMouse from "./HookMouse";
const DisplayContainer = () => {

    const [Display, setDisplay] = useState(true)
    return ( 
        <>
    <button onClick={()=>setDisplay(!Display)}>Toggle Display</button>
    {Display && <HookMouse />}
        </>
     );
}
 
export default DisplayContainer;