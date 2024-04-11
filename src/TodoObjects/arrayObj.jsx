import './style.css'
const { Component } = require("react");


class ObjOfArray extends Component{


         state = {
            avengers : [
                {
                name:'Thor',
                image : 'https://w0.peakpx.com/wallpaper/108/899/HD-wallpaper-thor-thor-superheroes-deviantart.jpg',
                id : 1
            },
            {
                name:'Iron-Man',
                image : 'https://media3.s-nbcnews.com/i/MSNBC/Components/Photo/_new/100506-ironman2-hmed.jpg',
                id : 2
            },
            {
                name:'Hulk',
                image : 'https://www.thefactsite.com/wp-content/uploads/2021/05/the-hulk-facts.jpg',
                id : 3
            },
            {
                name:'Captain-America',
                image : 'https://images.indianexpress.com/2021/01/chris-evans-captain-america-1200.jpg',
                id : 4
            },
            {
                name:'Natasha',
                image : 'https://w0.peakpx.com/wallpaper/130/614/HD-wallpaper-black-widow-for-homescreen-lockscreen-black-widow-marvel-black-widow-avengers-black-widow-natasha-romanoff.jpg',
                id : 5
            },
            {
                name:'DeadPool',
                image : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHdO8LjOo9e459pRK0SZ4LX5EeKyDs2hxh5PgRSUNmuw&s',
                id : 6
            },
            {
                name:'hawkeye',
                image : 'https://images.immediate.co.uk/production/volatile/sites/3/2019/07/avengers-8bb66cd.jpg?quality=90&resize=727,485',
                id : 7
            },
            {
                name:'Captain-America',
                image : 'https://i.guim.co.uk/img/media/fdc660936c71a95ee49a4f00ed15368f3c1b4e3f/0_60_744_446/master/744.jpg?width=465&dpr=1&s=none',
                id : 8
            },
        ]
         }

        //  addItem = ()=>{
        //     const addItem = this.state.avengers.map((eachObject,i)=>{
               
        //     })
        //  }

         deleteItem = (index)=>{

            const newAvengers = this.state.avengers.filter((eachObject,i)=>{
                return i!== index
            })

            this.setState({
                avengers:newAvengers
            })

         }

         updateItem = (index)=>{

            const updatedItems = this.state.avengers.map((eachObject,i)=>{
                if(i===index){
                    return({
                        name : 'SpiderMan',
                        image : 'https://s.yimg.com/ny/api/res/1.2/tEhY1Bj2qsd34_GQd6LzKw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM2MA--/https://media.zenfs.com/en/cinemablend_388/b042cd0f859cbe817539256919f473fe',
                        id:6
                    })
                }
                else
                return eachObject
            })

            this.setState({
                avengers:updatedItems
            })

         }


    render(){
        return(
            <div className='container'>

                {
                   this.state.avengers.map((eachObject,index)=>{
                    return(
                        <div className="card">
                        <img src={eachObject.image} height={210} width={200} alt="" />
                        <h4>{eachObject.name}</h4>
                        <div className='btnFlex'>
                        <button className='buttonClass' onClick={()=>this.deleteItem(index)}>Delete</button>
                        <button className='buttonClass' onClick={()=>this.updateItem(index)}>Update</button>
                        </div>
                        </div>
                    )
                   }) 
                }

            </div>
        )
    }
}

export default ObjOfArray