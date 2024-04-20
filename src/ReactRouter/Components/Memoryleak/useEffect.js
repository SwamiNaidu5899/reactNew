import { useEffect, useState } from "react";

const MemoryLeak = ()=>{

    const [x,setX] = useState(0)
    const [y,setY] = useState(0)

    const PreventMemoryLeak = (e)=>{
        setX(e.clientX)
        setY(e.clientY)
        console.log(e.clientX,'triggered');
        console.log(e.clientY,'triggered');
    }

    window.addEventListener('mousemove',PreventMemoryLeak)

    useEffect(()=>{
        window.addEventListener('mousemove',PreventMemoryLeak)

        return ()=>{
            window.removeEventListener('mousemove',PreventMemoryLeak)
        }
    },[])

    return(
        <>
        
        </>
    )
}
export default MemoryLeak