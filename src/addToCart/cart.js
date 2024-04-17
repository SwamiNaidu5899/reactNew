import axios from 'axios'
import {useEffect, useState} from 'react'
const AddToCart = ()=>{

    const [val,setVal] = useState([])

    useEffect(()=>{
        fecthData()
    },[])

    const fecthData = async()=>{
        const res = await axios.get('https://fakestoreapi.com/products')
        setVal(res.data)


    }
    return(
        <>
        {
            val.map(eachObj=>{
                const {id,title,description,image} = eachObj
                return(
                    <>
                    <h1>{id}</h1>
                    <h1>{image}</h1>
                    <h1>{title}</h1>
                    <h1>{description}</h1>
                    </>
                )
            })
        }
        </>
    )
}
export default AddToCart