import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { DataShare } from "../RoutingStack/routing"

const NotFound = ()=>{

    const {data,colorChange} = useContext(DataShare)


    const navigate = useNavigate()

    const navigateToHome = ()=>{


        navigate('/')

    }

    return(
        <div style={{
            background:`${data.backgroundColor}`
        }}>
        <img style={{height:'80vh',width:'80%',marginLeft:'10%'}} src="https://admiral.digital/wp-content/uploads/2023/08/404_page-not-found.png" alt="" />
        <button style={{position:'relative',top:'0%',left:'46%'}} onClick={navigateToHome}>GoToHome</button>
        </div>
    )
}
export default NotFound