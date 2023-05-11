import { Link } from "react-router-dom";
import {Icon} from "semantic-ui-react";

const Header = () => {
    return ( 
        <header className="H1">
            <Link to="/" style={{color:'inherit'}}>
             <Icon  name="home"/>
             Real Estate Athens 
             </Link>
        </header>
        
     );
}
 
export default Header;