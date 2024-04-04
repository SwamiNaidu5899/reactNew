import { Component } from "react";
import './add.css'

class AddItems extends Component {

  state = {

        avengers : ['https://wallpaperset.com/w/full/b/5/e/476960.jpg','https://images.wallpapersden.com/image/download/thor-in-avengers-endgame_a2lpZ2WUmZqaraWkpJRmbmdlrWZlbWU.jpg','https://images.hdqwalls.com/download/avenger-iron-man-fr-1920x1080.jpg']

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
        return 'https://c4.wallpaperflare.com/wallpaper/611/838/413/spiderman-hd-4k-superheroes-wallpaper-preview.jpg'
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
            <img src={eachAvenger} alt='' height={150}/>
             
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
