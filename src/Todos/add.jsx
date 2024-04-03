import { Component } from "react";
import './cssForToDo.css'

class AddDo extends Component{

    addTask = ()=>{

    }

    render(){
        return(
            <div className="cont">

                <form action="">
                    <input type="text" placeholder="typeUrTask" />
                    <button onClick={this.addTask}>addItem</button>
                </form>

            </div>
        )
    }
}

export default AddDo