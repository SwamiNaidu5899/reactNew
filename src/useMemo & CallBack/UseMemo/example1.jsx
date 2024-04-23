import { useState } from "react"

const ExampleMemo = ()=>{

    const [age,setAge] = useState(0)
    const [salary,setSalary] = useState(20000)

    

    const incAge = ()=>{
        console.log('age');
        setAge(age+1)
    }

    
    const incSalary = ()=>{
        console.log('salary');
        setSalary(salary+100)
    }

    return(
        <>
        <h1>Hello</h1>
        <h1>{age}</h1>
        <h1>{salary}</h1>
        <button onClick={incAge}>Increment Age</button>
        <button onClick={incSalary}>Increment salary</button>
        </>
    )
}
export default ExampleMemo