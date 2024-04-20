import { useContext } from 'react'
import './nav.css'
import {Link} from 'react-router-dom'
import { DataShare } from '../RoutingStack/routing'
const Navbar = ()=>{

    const {data,changeColor} = useContext(DataShare)

    return(
        <div className="nav">
        <ul>
            <li><Link to={'/'}>Home</Link></li>
            {/* <li><Link to={'/about'}>About</Link></li> */}
            <li><Link to={'/contact'}>Contact</Link></li>
            <li><Link to={'/services'}>Service</Link></li>
            <li><Link to={'/signIn'}>SignIn</Link></li>
            <li><Link to={'/products'}>Products</Link></li>
            <li onClick={changeColor}><Link>DarkMode</Link></li>
            
        </ul>
        </div>
    )
}
export default Navbar