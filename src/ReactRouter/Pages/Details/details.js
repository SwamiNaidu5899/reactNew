import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import './details.css'

const Details =  ()=>{
    const {productID} = useParams()
    console.log(productID);

    const [data,setData] = useState({})

    useEffect(()=>{
        fetchData()
    },[productID])

    const fetchData = async()=>{
       try {
        const response = await axios.get(`https://dummyjson.com/products/${productID}`)
        if(response.status===200){
            setData(response.data)
        }
       } catch (error) {
        console.error(error)
       }
    }

    const router = useNavigate()

    const goToHome = ()=>{
        router('/services')
    }

    return(
      <div className="detailsContainer">
        <div className="detailsCard">
        <h3>{data.title}</h3>
        <img src={data.thumbnail} width={180} height={200} alt={data.title}/>
        <h5>{data.description}</h5>
        <h5>$ {data.price}</h5>
        <button onClick={goToHome}>Back</button>
        </div>
      </div>
    )
}
export default Details