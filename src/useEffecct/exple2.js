import "./exm1.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Example1 = () => {
  const [res, setRes] = useState([]);
  const [cityDetails, setCityDetails] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const value = await axios.get(
      "https://freetestapi.com/api/v1/destinations"
    );
    setRes(value.data);
  };

  const fetchCityDetails = async (id) => {
    const cityData = await axios.get(
      `https://freetestapi.com/api/v1/destinations/${id}`
    );
    setCityDetails(cityData.data);
  };

  return (
    <div className="cardMain">
      
           {cityDetails && (
        <div>
          <h2>City Details</h2>
          <img src={cityDetails.image} height={250} alt="" />
          <p>Name: {cityDetails.name}</p>
          <p>Language: {cityDetails.language}</p>
        </div>
        
      )}
      <h1>Products</h1>
      <div id="container">
        {res.map((eachCity) => {
          const { name, image, id } = eachCity;
          return (
            <div id="card" key={id}>
              <h3>{name}</h3>
              <img src={image} height={150} alt="" />
              <button onClick={() => fetchCityDetails(id)}>Details</button>
            </div>
          );
        })}
      </div>
 
    </div>
  );
};
export default Example1;
