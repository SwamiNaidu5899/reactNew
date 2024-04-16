import { useNavigate } from "react-router-dom"

const NotFound = ()=>{

    const navigate = useNavigate()

    const navigateToHome = ()=>{
        navigate('/')

    }

    return(
        <>
        <img style={{height:'80vh',width:'80%',marginLeft:'10%'}} src="https://admiral.digital/wp-content/uploads/2023/08/404_page-not-found.png" alt="" />
        <button style={{position:'relative',top:'0%',left:'46%'}} onClick={navigateToHome}>GoToHome</button>
        </>
    )
}
export default NotFound