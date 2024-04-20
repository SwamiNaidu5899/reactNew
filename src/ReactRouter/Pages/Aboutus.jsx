import { useContext } from "react"
import Navbar from "../Components/nav"
import { DataShare } from "../RoutingStack/routing"
import MemoryLeak from "../Components/Memoryleak/useEffect"

const AboutUsPage = ()=>{

    const {data,changeColor} = useContext(DataShare)
    console.log(data);

    return(
        <div style={{
            height:'100vh',
            width:'100%',
            backgroundColor:`${data.backgroundColor}`
        }}>
        <Navbar/>
        <MemoryLeak/>
        <button onClick={changeColor}>Click</button>
        </div>
    )
}
export default AboutUsPage