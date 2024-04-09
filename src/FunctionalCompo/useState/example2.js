import './index.css'
import { useState } from "react"

const Crud = ()=>{

    const [avengers,setAvengers] = useState(['Thor','captainAmerica','ironMan'])

    const addAvengers=()=>{
        const newAvengers = [...avengers,'Hulk']
        setAvengers(newAvengers)
    }

    const removeA = (index)=>{
        const newAvengers = avengers.filter((eachA,i)=>i!==index)
        setAvengers(newAvengers)
    }

    const updateA = (index)=>{
        const newAvengers = avengers.map((eachA,i)=>{
            if(i===index)
            return 'jaiBalayya'
        else return eachA
        })
        setAvengers(newAvengers)
    }
    return(
        <>

        <h2>Avengers</h2>
        <button onClick={addAvengers}>Add</button>
        {
            avengers.map((val,index)=>{
                return(
                  <div key={index}>
                    <h3>{val}</h3>
                    <button onClick={()=>removeA(index)}>Remove</button>
                    <button onClick={()=>updateA(index)}>update</button>
                  </div>
                )
            })
        }

        

        </>
    )
}

export default Crud