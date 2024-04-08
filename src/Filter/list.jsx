import axios from 'axios'
const { Component } = require("react");

class FilterData extends Component{

    state={
        list : []
    }

    fetchData = async()=>{
        const result = await axios.get('https://dummyjson.com/products')
        console.log(result);
    }

    componentDidMount(){
        this.fetchData()
    }


    render(){
        return(
            <div className="">
                hi
            </div>
        )
    }
}

export default FilterData