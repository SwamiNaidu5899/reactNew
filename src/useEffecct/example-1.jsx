import "./exm1.css";
import { useEffect } from "react";
import { useState } from "react";

import axios from "axios";

const Example1 = () => {
  const [response,setResponse] = useState({})
  const [count,setCount] = useState(1)
  useEffect(() => {
    fetchEachCity()
  }, [count]);

  const countHandler = ()=>{
        setCount(prevState=>prevState+1)
  }

  const decCountHandler = ()=>{
    
  }
  const fetchEachCity = async()=>{
      const eachObjData = await axios.get(
        `https://freetestapi.com/api/v1/destinations/${count}`
      );
      console.log(eachObjData);
      setResponse(eachObjData.data)
      
  }


  // const fetchData = async () => {
  //   const value = await axios.get(
  //     "https://freetestapi.com/api/v1/destinations"
  //   );
  //   setRes(value.data);
  // };

  return (
    <div className="container">
      <h1>Cities</h1>
      <button onClick={decCountHandler}>Past</button>
      <button onClick={countHandler}>Next</button>
      <div id="card">
        <h2>{response.name}</h2>
        <img src={response.image} height={250} alt="" />
        <h4>Continent : {response.continent}</h4>
        <h4>BestTimeToVisit : {response.best_time_to_visit}</h4>
        <p>Description : {response.description}</p>
      </div>
    </div>
  );
};
export default Example1;
