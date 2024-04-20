import './products.css'
import {Link} from 'react-router-dom'
import axios from "axios";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { DataShare } from '../../RoutingStack/routing';

const ProductDetails = () => {
  const [product, setProduct] = useState([]);

  const {data,changeColor} = useContext(DataShare)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await axios.get("https://dummyjson.com/products");
    setProduct(data.data.products);
  };

  return (
    <div style={{
      background:`${data.backgroundColor}`
    }} className="container-products">
      {product.map((eachProduct) => {
        const { title, brand, thumbnail ,id } = eachProduct;
        return (
          <div className="card">
            <img src={thumbnail} width={150}
            height={200} alt="" />
            <h5>{title}</h5>
            <h5>{brand}</h5>
            <button id='btnDetail'>
              <Link to={`/${brand}/${id}`}>Details</Link>
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default ProductDetails;
