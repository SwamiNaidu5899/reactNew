import './nav.css'
import { Outlet, Link } from "react-router-dom";
const Nav = ()=>{
    return(
        <div id="navBar">

                <div id='logoDiv'>
                
                </div>
                <div id='navItems'>
                <div id='listItems'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/About'>About</Link>
                    </li>
                    <li>
                        <Link to='/Contact'>Contact US</Link>
                    </li>
                </div>
                <div id='btn'>
                    <button>SignIn</button>
                </div>
                </div>
        </div>
        
    )
}
export default Nav