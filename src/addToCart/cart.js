import axios from 'axios'
import {Link} from 'react-router-dom'
import {useEffect, useState} from 'react'
const AddToCart = ()=>{

    const [val,setVal] = useState([])

    useEffect(()=>{
        fecthData()
    },[])

    const fecthData = async()=>{
        try {
            const res = await axios.get('https://fakestoreapi.com/products')
            if(res.status===200){
                setVal(res.data)
            }
        } catch (error) {
            console.error(error)
        }
    }
    return(
        <>
        {
           val.length>0
           ?
           val.map(eachObj=>{
            const {id,title,description,image,brand} = eachObj
            return(
                <>
                <h1>{id}</h1>
                <h1>{image}</h1>
                <h1>{title}</h1>
                <h1>{description}</h1>
                <button><Link to={`${brand}/${id}`}>Details</Link></button>
                </>
            )
        })
        :
        <h1>Loading....</h1>
        }
        </>
    )
}
export default AddToCart