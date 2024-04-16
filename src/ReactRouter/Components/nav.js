import './nav.css'
import {Link} from 'react-router-dom'
const Navbar = ()=>{
    return(
        <div className="nav">
        <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/contact'}>Contact</Link></li>
            <li><Link to={'/services'}>Service</Link></li>
        </ul>
        </div>
    )
}
export default Navbar