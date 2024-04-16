import axios from "axios"
import { useEffect, useState } from "react"

const CurrentLocation = ()=>{

    const [curLocation , setCurLocation] = useState({})

    useEffect(()=>{
        fetchLocation()
        fetchWeather()
    },[])

    const fetchLocation = async()=>{
        const location = await axios.get('https://ipapi.co/json')
        setCurLocation(location.data)
    }

    let cityWeather = curLocation.city
    console.log(cityWeather);

    // const getLocationUsingJs = ()=>{
    //     navigator.geolocation.getCurrentPosition((position)=>{
    //         const {latitude,longitude} = position.coords;
    //         setCurLocationJs({latitude,longitude});
    //       })
    // }

    const fetchWeather = async()=>{
        const weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityWeather}&appid=bf89bc2cde67abeceea98d4c23a10716`)
        console.log(weather);
    }

    return(
        <div>
           <h1>Using API</h1>
           <p>Latitude : {curLocation.latitude}</p>
           <p>Longitude : {curLocation.longitude}</p>
           <p>City : {curLocation.city}</p>
{/* 

           <h1>Using JS GeoLocation</h1>
           <p>Latitude : {curLocationJs.latitude}</p>
           <p>Longitude : {curLocationJs.longitude}</p> */}
        </div>
    )
}
export default CurrentLocation