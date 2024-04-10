
import "./list.css";
import axios from 'axios'
const { Component } = require("react");
class FilterData extends Component {
  state = {
    products: [],
    dummyProducts : []
  };

  

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const data = await axios.get("https://dummyjson.com/products");
    this.setState({
      products: data.data.products,
      dummyProducts : data.data.products
    });
  };

  lowToHigh = () => {
    setTimeout(()=>{
      this.setState({
        products : this.state.dummyProducts
      })
    },0)
    setTimeout(()=>{
      const res = this.state.products.sort((a, b) => a.price - b.price);
    this.setState({
      products: res,
    });
    },1)
  };

  highToLow = () => {
    setTimeout(()=>{
      this.setState({
        products : this.state.dummyProducts
      })
    },0)
   setTimeout(()=>{
    const newRes = this.state.products.sort((a, b) => b.price - a.price);
    this.setState({
      products: newRes,
    });
   },1)
  };

 newF = ()=>{
  
  setTimeout(()=>{
    this.setState({
      products : this.state.dummyProducts
    })
  },0)
  setTimeout(()=>{
    const newData = this.state.products.filter((eachItem,i)=>{
      return eachItem.price<=1000
    })
    this.setState({
      products:newData
    })
  },1)
 }

 above1k = ()=>{


  setTimeout(()=>{
    this.setState({
      products : this.state.dummyProducts
    })
  },0)
  
 setTimeout(()=>{
  const newData = this.state.products.filter((eachItem,i)=>{
    return eachItem.price>=1000
  })
  this.setState({
    products:newData
  })
 },1)
 }



  render() {
    console.log(this.products);
    return (
      <div className="container">
        <div className="btn">
          <button onClick={this.lowToHigh}>LowToHigh</button>
          <button onClick={this.highToLow}>HighToLow</button>
          <button onClick={this.newF}>1000 Below</button>
          <button onClick={this.above1k}>1000 Above</button>
        </div>
        <div className="cardCon">
        {this.state.products.map((eachObj) => {
          const { title, id, thumbnail, price } = eachObj;
          return (
            <div className="card" key={id}>
              <img src={thumbnail} alt="" height={250} width={150} />
              <h4>{title}</h4>
              <h5>${price}</h5>
            </div>
          );
        })}
        </div>
      </div>
    );
  }
}
export default FilterData;
