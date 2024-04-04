import { Component } from "react";
import axios from 'axios'
import './Axios.css'

class GetData extends Component{

 state = {
  products:[]
 }

  componentDidMount(){
    this.fetchData()
  }

  fetchData = async()=>{

    const result = await axios.get('https://dummyjson.com/products')
    console.log(result);

    this.setState({
      products : result.data.products
    })

  }

  render(){
    console.log(this.state.products,'log from render');
    return(
      <div className="container">
      <h1 id="products-Heading">Products</h1>
      {
        this.state.products.length>0
        ?
        <div className="card-details">
        {
          this.state.products.map(eachObject=>{
            const {title,description,thumbnail,price} = eachObject
            return(
              <div className="card">
                <img src={thumbnail} height={300} width={250} alt="" />
              <h4>{title}</h4>
              <p style={{fontSize:'15px'}}>{description}</p>
              <button>${price}</button>
              </div>
            )
          })
        }
        </div>
        :
        <h2>No products</h2>
      }
      </div>
    )
  }
}
export default GetData