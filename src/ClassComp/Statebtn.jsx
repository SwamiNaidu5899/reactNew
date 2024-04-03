import { Component } from "react";
import CounterComp from "./Counter";

class CustomState extends Component{


    state =  {
        isFollow : false,
        txt1 : 'Follow',
        txt2 : 'Followed'
    }

    testFollow = ()=>{
        console.log('clicked');
        this.setState(
            {
                isFollow : !this.state.isFollow
            }
            )
    }

    render(){
        return(
            <>
            <button style={
                {
                    color:'blueviolet',
                    background : 'transparent',
                    border : '2px solid blueviolet',
                    marginTop : '5vh',
                    padding : '10px 45px',
                    borderRadius : '12px'
                }
            } onClick={this.testFollow}>{this.state.isFollow ? this.state.txt2 : this.state.txt1}</button>

            {
                this.state.isFollow
                ?
                <>
                <CounterComp/>
                <h3>Nice..</h3>
                </>
                :
                <h3>Follow chey mowaa Bro!</h3>
            }
            </>
        )
    }
}

export default CustomState