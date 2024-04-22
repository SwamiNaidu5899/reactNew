import { useCallback, useState } from "react"
import CustomButton from "./CustomeBtn"

const UseCallbackExample = ()=>{

    const [ age,setAge] = useState(0)
    const [ salary,setSalary] = useState(15000)

    const incrementAge =   useCallback(()=>{
        setAge(age+1)
    },[age])

    const incrementSalary =useCallback(()=>{
        setSalary(salary+200)
    },[salary])

     

    return(
        <>
        <h2>{age}</h2>
        <h2>{salary}</h2>
        <CustomButton title='AgeInc' handler={incrementAge} />
        <CustomButton title='SalaryInc' handler={incrementSalary} />
        </>
    )
}
export default UseCallbackExample