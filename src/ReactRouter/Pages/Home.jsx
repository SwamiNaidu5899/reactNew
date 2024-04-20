import Navbar from "../Components/nav"
import Example1 from "../../useEffecct/example-1"
import { useContext } from "react"
import { DataShare } from "../RoutingStack/routing"

const HomePage = ()=>{

    const {data,changeColor} = useContext(DataShare)

    return(
        <div style={{
            background:`${data.backgroundColor}`
        }}>
            <Navbar/>
            <Example1/>
        </div>
    )
}
export default HomePage