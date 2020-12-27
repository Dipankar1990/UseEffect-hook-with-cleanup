import React,{useState,useEffect} from 'react';

const HookMouse = () => {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    

const logMousePoint = e =>{
    console.log('mouse event')
    setX(e.clientX)
    setY(e.clientY)
}
    useEffect(()=>{
        console.log('useEffect called')
        window.addEventListener("mousemove", logMousePoint)

        return ()=>{
            window.removeEventListener('mousemove', logMousePoint)
        }
    },[])
    return ( 
        <>

        
        { 'X - ' +x +'Y - ' + y}
        
      
        
        
         
        </>
     );
}
 
export default HookMouse;