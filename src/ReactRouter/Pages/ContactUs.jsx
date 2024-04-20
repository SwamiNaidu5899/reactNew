import { useContext } from "react"
import RegisterForm from "../../FunctionalCompo/ControlledFroms/register"
import Navbar from "../Components/nav"
import { DataShare } from "../RoutingStack/routing"
import MemoryLeak from "../Components/Memoryleak/useEffect"

const ContactUSPage = ()=>{

    const {data,changeColor} = useContext(DataShare)
    // console.log(data);

    return(
        <div style={{
            height:'100vh',
            width:'100%',
            backgroundColor:`${data.backgroundColor}`
        }}>
        <Navbar/>
        <RegisterForm/>
        <MemoryLeak/>
        {/* <button onClick={changeColor}>Click</button> */}
        </div>
    )
}
export default ContactUSPage