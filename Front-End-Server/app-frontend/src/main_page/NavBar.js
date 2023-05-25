import FirstImg from '../images/FirstImg.jpg';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return ( 
        
        
        <div className='Nav'>
                
            <ul className='list'>
                <li className='buy'>
                    <NavLink to="/buy" className="links">BUY</NavLink>
                </li>

                <li className='rent'>
                <NavLink to="/rent" className="links">RENT</NavLink>
                </li>

                <li className='agents'>
                    <NavLink to="/agents" className="links">AGENTS</NavLink>
                </li>

                <li className='sell'>
                <NavLink to="/sell" className="links">SELL</NavLink>
                </li>
            </ul>
            
            <img src={FirstImg}  alt="second"  className='FirstImg'/>
        </div>
                   
        
     );
}
 
export default Navbar;