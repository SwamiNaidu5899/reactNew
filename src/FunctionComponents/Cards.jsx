import Data from "./Data";

let Card = ()=>{
    return (
        <div className="mainDiv">

            {

                Data.map((val)=>(
                    

                    val.from==="Marvel" ? 
                   (
                        <div className="card">
                        <h3>{val.name}</h3>
                        <img src={val.image} height={150} alt=''/>
                        <h4>{val.from}</h4>
                        </div>
                    )
                    :
                    null


                ))}
        </div>
    )
}

export default Card