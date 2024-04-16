import {useEffect, useState} from 'react'
const Chaitanya = ()=>{
    
    const [result,setResult] = useState(0)

    useEffect(()=>{
        setResult(prevValue=>prevValue+1)
    },[])

    return(
        <>
        <h1>{result}</h1>
        </>
    )
}
export default Chaitanya