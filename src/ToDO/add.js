import { Component } from "react";
import './add.css'

class AddItems extends Component {

  state = {

        avengers : ['https://wallpaperset.com/w/full/b/5/e/476960.jpg','https://w0.peakpx.com/wallpaper/108/899/HD-wallpaper-thor-thor-superheroes-deviantart.jpg','https://images.hdqwalls.com/download/avenger-iron-man-fr-1920x1080.jpg']

          }


    addAvenger = ()=>{
      const newAvenger = [...this.state.avengers,'https://i.pinimg.com/736x/08/d0/ad/08d0adb1e49c193d1eefc65f98b7f797.jpg']

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
    <div className="container">

      <button id="btn" onClick={this.addAvenger}>addAvenger</button>
      <div className="card">
      
      {
        this.state.avengers.map((eachAvenger,index) =>{
          return (
            <>
            <img src={eachAvenger} alt='' height={250} width={200}/>
             
            <button className="btnNew" onClick={()=>this.deleteAvenger(index)}>Delete</button>
            <button className="btnNew" onClick={()=>this.updateAvenger(index)}>Update</button>
            </>
          )
        } )
      }
      </div>

    </div>
    );
  }
}

export default AddItems;
