import { Component } from "react";
import './cssForTask.css'

class Weapon extends Component{

    fruits = [

        'Apple','Orange','Banana','Pomegranate'

    ]

    addBtn = ()=>{

    }

    removeBtn = ()=>{
        this.fruits = ({
                 fruits : this.fruits.pop()
             })
         }

    render(){
        return(
            <div className="container">
            {
                this.fruits.map((val)=>{
                    return (
                        <h1>
                            {val}
                        </h1>
                    )
                })
            }

            <button onClick={this.addBtn}>Add</button>
            <button onClick={this.removeBtn}>Remove</button>

            </div>
        )
    }
}
export default Weapon