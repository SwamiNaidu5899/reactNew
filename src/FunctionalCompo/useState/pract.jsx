import { useState } from "react"

const Practice = ()=>{

    const [hero,setHero]=useState(['balayya','alluArjun','sampurneshbabu'])
    // const [fruit,setfruit] = useState(['apple','banana','berry'])

    const addHero = ()=>{
        const newHero = [...hero,'seethayya']
        setHero(newHero)
    }

    const delHero = (i)=>{
        const newHero = hero.filter((eachH,index)=>i!==index)
        setHero(newHero)
    }

    const upHero = (i)=>{
        const newHero = hero.map((eachHero,index)=>{
            if(i===index){
                return 'subbu'
            }
            else
            {
                return eachHero
            }
           
        })
        setHero(newHero)
    }

    return(
        <>
            <h1>Heros</h1>
            <button onClick={addHero}>addHero</button>
        {
            hero.map((eachHero,i)=>{
                return(
                    <>
                    <h3>{eachHero}</h3>
                    <button onClick={()=>delHero(i)}>Delete</button>
                    <button onClick={()=>upHero(i)}>Update</button>
                    </>
                )
            })
        }
        
        </>
    )
}
export default Practice