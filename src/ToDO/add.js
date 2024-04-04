import { Component } from "react";
import './add.css'

class AddItems extends Component {

  state = {

        avengers : ['Cap','IronMan','Thor']

          }


    addAvenger = ()=>{
      const newAvenger = [...this.state.avengers,'Hulk']

      this.setState(
        {
          avengers : newAvenger
        }
      )
    }

    deleteAvenger = (index)=>{
      const newAvenger = this.state.avengers.filter((eachAvenger,i)=>i!==index)

      this.setState({
        avengers:newAvenger
      })
    }

    updateAvenger = (index)=>{
      const newAvenger = this.state.avengers.map((eachAvenger,i)=>{
       if(i===index){
        return 'Black-panther'
       }
       else
       return eachAvenger
      })

      this.setState({
        avengers : newAvenger
      })
    }



  render() {
    return (
    <div className="divMain">

      <button onClick={this.addAvenger}>addAvenger</button>

      {
        this.state.avengers.map((eachAvenger,index) =>{
          return (
            <>
            <h3>
              {eachAvenger}
            </h3>
            <button onClick={()=>this.deleteAvenger(index)}>Delete</button>
            <button onClick={()=>this.updateAvenger(index)}>Update</button>
            </>
          )
        } )
      }

    </div>
    );
  }
}

export default AddItems;
