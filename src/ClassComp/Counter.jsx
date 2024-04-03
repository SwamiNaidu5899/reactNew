import { Component } from "react";

class CounterComp extends Component{

    state = (
        {
            count : 0
        }
    )

    IncrementCount = ()=>{
        
        this.setState(
            {
                count : this.state.count+1
            }
        )

    }

    DecrementCount = ()=>{
        
        this.setState(
            {
                count : this.state.count-1
            }
        )

    }


    Reset = ()=>{
        
        this.setState(
            {
                count : 0
            }
        )

    }

    render(){
        return(
            <div>

            <h2 style={{
                marginTop:'5vh'
            }}>Counter Example</h2>

            <h3>{this.state.count}</h3>

            <button
            style={
                {
                    color:'green',
                    background : 'transparent',
                    border : '2px solid green',
                    margin : '5vh',
                    padding : '10px 45px',
                    borderRadius : '12px'
                }
            }
            onClick={this.IncrementCount}>Increment</button>



<button
            
            style={
                {
                    color:'blue',
                    background : 'transparent',
                    border : '2px solid blue',
                    margin : '5vh',
                    padding : '10px 45px',
                    borderRadius : '12px'
                }
            }
            
            onClick={this.Reset}>Reset</button>



            <button
            
            style={
                {
                    color:'red',
                    background : 'transparent',
                    border : '2px solid red',
                    margin : '5vh',
                    padding : '10px 45px',
                    borderRadius : '12px'
                }
            }
            
            onClick={this.DecrementCount}>Decrement</button>








            </div>
        )
    }
}

export default CounterComp