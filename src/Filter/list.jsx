import axios from "axios";
import "./list.css";
const { Component } = require("react");

class FilterData extends Component {
  state = {
    products: [],
  };

  componentDidMount() {
    this.fetchData();
  }

  lowToHigh = () => {
    const res = this.state.products.sort((a, b) => a.price - b.price);
    this.setState({
      products: res,
    });
  };

  highToLow = () => {
    const newRes = this.state.products.sort((a, b) => b.price - a.price);
    this.setState({
      products: newRes,
    });
  };

 newF = ()=>{
  const newData = this.state.products.filter((eachItem,i)=>{
    return eachItem.price<=1000
  })
  this.setState({
    products:newData
  })
 }

 above1k = ()=>{
  const newData = this.state.products.filter((eachItem,i)=>{
    return eachItem.price>=1000
  })
  this.setState({
    products:newData
  })
 }

  fetchData = async () => {
    const data = await axios.get("https://dummyjson.com/products");
    this.setState({
      products: data.data.products,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="btn">
          <button onClick={this.lowToHigh}>LowtoHigh</button>
          <button onClick={this.highToLow}>HighToLow</button>
          <button onClick={this.newF}>1000 Below</button>
          <button onClick={this.above1k}>1000 Above</button>
        </div>
        {this.state.products.map((eachObj) => {
          const { title, id, thumbnail, price } = eachObj;
          return (
            <div className="card" key={id}>
              <img src={thumbnail} alt="" height={150} width={100} />
              <h4>{title}</h4>
              <h5>${price}</h5>
            </div>
          );
        })}
      </div>
    );
  }
}
export default FilterData;
