import { useMemo } from "react";
import { useState } from "react"

const UseMemo = ()=>{

    
    const [age,setAge] = useState(0)
    const [salary,setSalary] = useState(12000)

    const checkEvenAge =  useMemo(()=>{
        console.log("age calculation rendering");
        const even = age % 2 === 0
        return even ? 'Even' : 'Odd'
    },[age])

   

    const incrementAge = ()=>{
        setAge(age+1)
    }

    const incrementSalary = ()=>{
        setSalary(salary+5000)
    }

    
    return(
        <>
        <h2>UseMemo Example</h2>
        <h2>{age} {checkEvenAge}</h2>
        <h2>{salary}</h2>
        <button onClick={incrementAge}>Increment Age</button>
        <button onClick={incrementSalary}>Increment salary</button>
        </>
    )
}
export default UseMemo