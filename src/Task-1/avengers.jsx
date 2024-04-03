import { Component } from "react";

class AddAvengers extends  Component{

    state = {
        isAvenger : true,
        txt1 : 'Avenger',
        txt2 : 'DC'
    }

    testAvng = ()=>{
        this.setState({
            isAvenger : !this.state.isAvenger,
            

        })
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
            } onClick={this.testAvng}>{this.state.isAvenger ? this.state.txt1 : this.state.txt2}</button>

            {
                this.state.isAvenger 
                ?
                <>
                    <h4>Avenger</h4>
                </>
                :
                <>
                    <h4>DC</h4>
                </>
            }
            </>
        )
    }
}

export default AddAvengers