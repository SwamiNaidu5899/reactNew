import axios from 'axios'
import './style.css'
const { Component } = require("react");

class CartCount extends Component{


    state={
        list : []
    }

    fetchData = async()=>{
        const result = await axios.get('https://dummyjson.com/products')
        const resultNew = result.data.products.map(eachObj=>{
            const data = {...eachObj,count:1,totalPrice : eachObj.price}
            return data
        })

        this.setState({
            list : resultNew
        })
    }

    componentDidMount(){
        this.fetchData()
    }

    countInc = (id)=>{
       const countNew =  this.state.list.map(eachObj=>{
        if(id===eachObj.id){
            eachObj.count+= 1
            eachObj.totalPrice=eachObj.price*eachObj.count
            return eachObj
        }
        else
        return eachObj
       })
       this.setState({
        list : countNew
       })
    }

    countDec = (id)=>{
        const countDecNew = this.state.list.map(eachObj=>{
            if(id===eachObj.id){
                if(eachObj.count>0)
               {
                eachObj.count-=1
                eachObj.totalPrice=eachObj.price*eachObj.count
                return eachObj
               }
               else
               return eachObj
            }
            else
            return eachObj
        })
        this.setState({
            list : countDecNew
        })
    }


    render(){
        return(

           <>
           <h1 className='totalAmount'>Products</h1>
            <div className='divPrice'>
                <h2>Cart</h2>
            <h3 >TotalAmount : ${
                this.state.list.reduce((a,b)=>{
                    return a+b.totalPrice
                },0)
                }</h3>
            </div>
            <div className='container'>
              
            {
                this.state.list.map(eachObj=>{

                   const {price,title,thumbnail,count,totalPrice,id} = eachObj

                    return(
                        <div className='card'>
                        <img src={thumbnail} height={150} width={180} alt="" />                  
                        <h4>{title}</h4>
                        <button>${price}</button>
                        <h3>Count : {count}</h3>
                        <h4>Total_Price : ${totalPrice}</h4>
                        <div className='btnFlex'>
                        <button onClick={()=>this.countInc(id)}>Add</button>
                        <button onClick={()=>this.countDec(id)}>Remove</button>
                        </div>

                        </div>
                    )
                })
            }
            </div>
           </>
        )
    }
}

export default CartCount